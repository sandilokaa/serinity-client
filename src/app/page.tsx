'use client';

import Header from "@/components/landing/Header";
import Category from "@/components/landing/Category";
import Item from "@/components/landing/Item";
import Discover from "@/components/landing/Discover";

export default function Home() {
  return (
    <main>
      <Header/>
      <Category/>
      <Item/>
      <Discover/>
    </main>
  );
}