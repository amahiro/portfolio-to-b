"use client";

import { useEffect } from "react";

const clamp = (v: number) => Math.max(0, Math.min(1, v));

// .tp の動き: 画面に入ったら出す・スクロール連動・FV の動画の再生。
// マークアップはサーバーで描画し、ここではクラスと CSS 変数だけを書き換える（スタイルは home.css）。
export default function HomeEffects() {
  useEffect(() => {
    if (!document.querySelector(".tp")) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // FV の動画: 再生が始まってから見せる。自動再生を止められたとき（iPhone の低電力モードなど）は、
    // 同じ映像のアニメーション画像（WebP）を代わりに出す
    const video = document.querySelector<HTMLVideoElement>(".hero__video");
    if (video) {
      if (still) {
        video.removeAttribute("autoplay");
        video.pause();
      } else {
        const show = () => {
          video.classList.add("is-playing");
          window.setTimeout(() => document.querySelector(".hero__anim")?.remove(), 700);
        };
        const hide = () => video.classList.remove("is-playing");
        if (!video.paused && video.currentTime > 0) show();
        video.addEventListener("playing", show);
        video.addEventListener("pause", hide);

        let fallbackShown = false;
        const showFallback = () => {
          if (fallbackShown || !video.paused) return;
          fallbackShown = true;
          const img = document.createElement("img");
          img.className = "hero__anim";
          img.alt = "";
          img.setAttribute("aria-hidden", "true");
          img.decoding = "async";
          img.src = "/home/hero-anim.webp";
          video.insertAdjacentElement("beforebegin", img);
        };
        const tryPlay = () => {
          if (document.hidden || !video.paused) return;
          video.muted = true;
          video.play().catch((err: unknown) => {
            if (err instanceof DOMException && err.name === "NotAllowedError") showFallback();
          });
        };
        const fallbackTimer = window.setTimeout(showFallback, 2500);
        tryPlay();
        video.addEventListener("canplay", tryPlay);
        document.addEventListener("visibilitychange", tryPlay);
        window.addEventListener("pageshow", tryPlay);
        window.addEventListener("touchend", tryPlay, { passive: true });
        cleanups.push(() => {
          window.clearTimeout(fallbackTimer);
          video.removeEventListener("playing", show);
          video.removeEventListener("pause", hide);
          video.removeEventListener("canplay", tryPlay);
          document.removeEventListener("visibilitychange", tryPlay);
          window.removeEventListener("pageshow", tryPlay);
          window.removeEventListener("touchend", tryPlay);
        });
      }
    }

    // 順番に出す一覧: 子に番号を振る
    document
      .querySelectorAll<HTMLElement>(".tp .js-stagger, .tp .works__list")
      .forEach((list) => {
        Array.from(list.children).forEach((el, i) => {
          (el as HTMLElement).style.setProperty("--i", String(i));
        });
      });

    // 画面に入ったら出す
    const targets = document.querySelectorAll<HTMLElement>(
      ".tp .js-fade, .tp .js-stagger, .tp .ttl",
    );
    if ("IntersectionObserver" in window && !still) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add("is-in");
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -12% 0px" },
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      targets.forEach((el) => el.classList.add("is-in"));
    }

    // スクロール連動: FV が角丸の板に縮む・わたしについての写真が枠の中でゆっくりずれる
    const hero = document.querySelector<HTMLElement>(".tp .hero");
    const photo = document.querySelector<HTMLElement>(".tp .about__photo");
    if (!still && (hero || photo)) {
      let ticking = false;
      const update = () => {
        ticking = false;
        const vh = window.innerHeight;
        if (hero) hero.style.setProperty("--shrink", clamp(window.scrollY / 420).toFixed(3));
        if (photo) {
          const r = photo.getBoundingClientRect();
          photo.style.setProperty("--par", clamp((vh - r.top) / (vh + r.height)).toFixed(3));
        }
      };
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
      update();
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

// JavaScript が無効でも本文が見えるよう、動きの初期状態（透明・ずらし）を打ち消す
const noScriptStyle =
  ".tp .js-fade,.tp .js-stagger>*,.tp .reason__list.js-stagger>li>*,.tp .ttl__jp,.tp .ttl__en,.tp .works__img img{opacity:1!important;transform:none!important}";

export function HomeNoScriptStyle() {
  return (
    <noscript>
      <style dangerouslySetInnerHTML={{ __html: noScriptStyle }} />
    </noscript>
  );
}
