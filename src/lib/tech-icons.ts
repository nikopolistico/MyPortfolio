/**
 * Real brand icons, bundled locally from the `devicon` package (no CDN).
 * To add one: import it below and add it to `techIcons`, then use its key as `icon` in src/data/portfolio.ts.
 * Browse names at https://devicon.dev  (path: devicon/icons/<name>/<name>-original.svg)
 */
import html5 from 'devicon/icons/html5/html5-original.svg'
import css3 from 'devicon/icons/css3/css3-original.svg'
import javascript from 'devicon/icons/javascript/javascript-original.svg'
import typescript from 'devicon/icons/typescript/typescript-original.svg'
import react from 'devicon/icons/react/react-original.svg'
import nextjs from 'devicon/icons/nextjs/nextjs-original.svg'
import vue from 'devicon/icons/vuejs/vuejs-original.svg'
import nuxt from 'devicon/icons/nuxtjs/nuxtjs-original.svg'
import angular from 'devicon/icons/angular/angular-original.svg'
import svelte from 'devicon/icons/svelte/svelte-original.svg'
import astro from 'devicon/icons/astro/astro-original.svg'
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg'
import vite from 'devicon/icons/vitejs/vitejs-original.svg'
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg'
import express from 'devicon/icons/express/express-original.svg'
import nestjs from 'devicon/icons/nestjs/nestjs-original.svg'
import django from 'devicon/icons/django/django-plain.svg'
import laravel from 'devicon/icons/laravel/laravel-original.svg'
import php from 'devicon/icons/php/php-original.svg'
import python from 'devicon/icons/python/python-original.svg'
import flutter from 'devicon/icons/flutter/flutter-original.svg'
import dart from 'devicon/icons/dart/dart-original.svg'
import kotlin from 'devicon/icons/kotlin/kotlin-original.svg'
import dotnet from 'devicon/icons/dotnetcore/dotnetcore-original.svg'
import csharp from 'devicon/icons/csharp/csharp-original.svg'
import electron from 'devicon/icons/electron/electron-original.svg'
import mysql from 'devicon/icons/mysql/mysql-original.svg'
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg'
import mongodb from 'devicon/icons/mongodb/mongodb-original.svg'
import firebase from 'devicon/icons/firebase/firebase-original.svg'
import sqlite from 'devicon/icons/sqlite/sqlite-original.svg'
import git from 'devicon/icons/git/git-original.svg'
import github from 'devicon/icons/github/github-original.svg'
import docker from 'devicon/icons/docker/docker-original.svg'
import vercel from 'devicon/icons/vercel/vercel-original.svg'
import linux from 'devicon/icons/linux/linux-original.svg'
import githubactions from 'devicon/icons/githubactions/githubactions-original.svg'
import pandas from 'devicon/icons/pandas/pandas-original.svg'
import numpy from 'devicon/icons/numpy/numpy-original.svg'
import scikitlearn from 'devicon/icons/scikitlearn/scikitlearn-original.svg'
import jupyter from 'devicon/icons/jupyter/jupyter-original.svg'

export const techIcons: Record<string, string> = {
  html5,
  css3,
  javascript,
  typescript,
  react,
  nextjs,
  vue,
  nuxt,
  angular,
  svelte,
  astro,
  tailwind,
  bootstrap,
  vite,
  nodejs,
  express,
  nestjs,
  django,
  laravel,
  php,
  python,
  flutter,
  dart,
  kotlin,
  dotnet,
  csharp,
  electron,
  mysql,
  postgresql,
  mongodb,
  firebase,
  sqlite,
  git,
  github,
  docker,
  vercel,
  linux,
  githubactions,
  pandas,
  numpy,
  scikitlearn,
  jupyter,
}

/** Icons drawn in near-black: shown as white in dark mode so they stay visible. */
export const adaptiveIcons = new Set(['nextjs', 'express', 'django', 'github', 'vercel'])
