'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Cave = () => {
  let index = 0
  const { scene } = useGLTF('/cave.glb', true)
  const { scrollY } = useScroll()

  useThree(({ camera }) => void camera.position.setZ(13))
  useFrame(({ camera }) => {
    if (window !== void 0) camera.position.setY(-10 - scrollY.get() / window.innerHeight * 9)
  })
  useEffect(() => scrollY.on('change', latest => {
    if (latest > index * screen.height) scrollTo({ top: ++index * screen.height - 1, behavior: 'smooth' })
  }), [scrollY])

  return (<primitive object={scene}/>)
}

const Page = ({children}: {children: React.ReactNode}) => (
  <>
    <div className='fixed top-0 -z-10 h-screen w-screen' style={{minWidth: '310px'}}>
      <Canvas camera={{fov: 90}}>
        <directionalLight castShadow position={[0, 1, -10]} intensity={5} color={0x88ccee}/>
        <ambientLight intensity={3} color={0x88ccee}/>
        <Cave/>
      </Canvas>
    </div>
    <main className='flex flex-col gap-4' style={{minWidth: '310px'}}>{children}</main>
  </>
)

const Title = () => {
  const [ width, setWidth ] = useState(0)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    if (window !== void 0) {
      setWidth(window.innerWidth)
      window.addEventListener('resize', onResize)
      return window.removeEventListener('resize', onResize)
    }
  }, [])

  return width > 1000 ? (
    <h1 className='flex gap-2 self-center'>
      <img src='/minecraft-logo.png' alt='Minecraft' className='max-w-md'/>
      <span className='text-4xl whitespace-nowrap font-bold'>のこと、<br/>ゲームだと思ってない？</span>
    </h1>
  ) : (
    <h1 className='flex flex-col items-center self-center'>
      <img src='/minecraft-logo.png' alt='Minecraft'/><br/>
      <span className='text-4xl font-bold'>のこと、ゲームだと思ってない？</span>
    </h1>
  )
}

const Section = ({isHead = false, children}: {isHead?: boolean, children: React.ReactNode[]}) => (
  <section className={`flex flex-col justify-center h-screen ${isHead ? '' : 'px-4 md:px-40'}`}>
    <div className={`flex flex-col justify-center p-4 ${
      isHead ? 'items-center text-xl' : 'bg-green-900/50'
    }`}>{
      children.map((node, index) => (
        <motion.span key={`${node?.toString()}${index}`} initial={{
          opacity: 0,
          transitionProperty: 'all',
          transitionDelay: `${index}s`,
          transitionDuration: '1s'
        }} whileInView={{opacity: 1}} viewport={{ once: true, amount: 0 }}>{node}</motion.span>
      ))
    }</div>
  </section>
)

const Figure = ({site, href, children}: {site: string, href: string} & React.PropsWithChildren) => (
  <figure className='flex flex-col mx-10 items-center'>
    <blockquote className='p-4 bg-green-950'>{children}</blockquote>
    <figcaption className='p-4 rounded-xl self-end'>
      ー <cite><a href={href}>{site}</a> から引用</cite>
    </figcaption>
  </figure>
)

export default function Home() {
  useEffect(() => {
    if (window !== void 0) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Page>
        <Section isHead>
          <Title/>
          <p className='font-bold'>実は、それだけじゃない！</p>
          <p className='font-bold'>デザイン、プログラムの勉強にも Minecraft は使えます！</p>
        </Section>
        <Section>
          <h1>『Minecraft』って？</h1>
          <Figure site='Minecraft' href='https://www.minecraft.net/ja-jp/minecraft-tips-for-beginners'>
            Minecraft は、ブロック、モブ、コミュニティで出来ているゲームです。夜を生き抜いたり、芸術作品を作ったり。遊び方はあなた次第です。
          </Figure>
          <p>
            Minecraftはその独特な世界観と自由度の高さから圧倒的な人気を持つゲームです。<br/>
            勿論ですが、<em>Minecraft はゲームとしても立派に楽しむことができます。</em><br/>
            サバイバルモードで冒険をして、採掘をして、拠点を建てて…
          </p>
        </Section>
        <Section>
          <h1>始まりの一歩</h1>
          <p>
            クリエイティブモードでは建材は無制限。
            建物を建てるのもよし、レッドストーン回路を組み立てるもよしです。
            <br/>
            建築 は奥深く、四角いお家から、過剰なほどの装飾で出来た巨大な都市を作ってしまうこともできます。<br/>
            レッドストーン回路 はお家の玄関に置く感圧板から、Minecraft の世界で Minecraft を作ってしまうこともできます。<br/>
            コマンド は / から始まる不思議な英単語の羅列で出来ていて、新しい要素を作ってしまうこともできます。<br/>
            プラグイン や モッド は コマンド よりも更に自由度が高く、もはや Minecraft とは言い難いようなものまで作ってしまうこともできます。<br/>
            リソースパック はアイテムの見た目を変えるところから、Minecraft を脱却したような立体感のあるものを作ってしまうこともできます。
          </p>
        </Section>
        <Section>
          <h1 className='p-4 text-2xl font-bold'>上を見てはキリがない</h1>
          <p>
            …とはいえ、上の世界を見て、自分がそこまで行けるのかという疑問も確かです。<br/>
            <br/>
            <em>百聞は一見に如かず、やってみましょう！</em><br/>
            <br/>
            当コミュニティでは、Minecraft の基礎的なことから、応用した様々な技術についての情報を提供するべく活動しています！<br/>
            ご興味がありましたら、これが授業の一環でしかなく、実現はしずらいことをご理解いただいたうえで、<br/>
            コミュニティのことは一旦諦めて、まずはあなたが気になることから調べてみましょう！
          </p>
        </Section>
      </Page>
      <footer className='flex flex-col items-center p-4 border-t-2 border-t-green-800 bg-green-950'>
        <p>
          このサイトは
          <a href='https://www.minecraft.net/ja-jp/usage-guidelines'>Minecraft 利用ガイドライン</a>
          に沿って作成されています。
        </p>
        <p>
          また、このサイトはMinecraft公式サイトではなく、Mojang Studios 及び Microsoft に関係するものでもありません。
        </p>
        <p className='py-4'>
          問い合わせは
          <a href='https://n-highschool.slack.com/team/U01TQ4M0L1L'>Unreadabread</a>
          まで
        </p>
      </footer>
    </>
  )
}