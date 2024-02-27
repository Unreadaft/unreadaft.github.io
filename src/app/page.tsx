'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Gltf, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { PropsWithChildren, Suspense, useRef, useState } from 'react'
import { Object3D } from 'three'

const source = {
  logo: '/resource/minecraft-logo.png',
  cave: '/resource/cave.gltf',
  diorite: '/resource/diorite.gltf',
} as const

export default function Home() {
  return (
    <main className='h-screen w-screen'>
      <Canvas shadows>
        {/* <PerspectiveCamera makeDefault>
          <Html className='cover absolute z-10 h-screen w-screen pointer-events-none'/>
        </PerspectiveCamera> */}
        <ambientLight color='#aaccdd' intensity={1} />
        <rectAreaLight color='#aaccdd' intensity={50} position={[3, 40, 0]} rotation={[Math.PI / -2, 0, 0]} />
        <Fire/>
        <fog attach='fog' color='#000' near={28} far={39} />
        <ScrollControls pages={4.2} damping={0}>
          <Content />
          <Suspense fallback="だめぽ"><Gltf src={source.cave} matrixAutoUpdate={false}/></Suspense>
          <BuildingDiorite range={[0.2, 0.23]} position={[[-1, -0.49], [7, 8.7], [8, 1.16]]} rotation={[[3, 3], [1, 1, Math.PI], [2, 2]]}/>
          <BuildingDiorite range={[0.23, 0.26]} position={[[-2, 0.51], [2, 4.7], [3, -3.84]]} rotation={[[2, 2], [1, 1, Math.PI], [1, 1]]}/>
        </ScrollControls>
      </Canvas>
    </main>
  )
}

function Content() {
  const scroll = useScroll()
  
  useFrame(({ camera }) => {
    camera.position.set(-2, -scroll.range(0, 1) * 31 + 13, 14)

    const visible = scroll.range(0, 70 / 100) * 35 + 65
    document.body.style.background = `linear-gradient(0deg, #000 0%, #000 ${visible}%, #88ccee ${visible}%, #88ccee 100%)`
  })

  return (
    <Scroll html>
      <Section ishead>
        <h1 className='text-center text-4xl'>
          <span className='flex justify-center items-center'>
            <img className='w-3/5' src={source.logo} alt='Minecraft'/>
            のこと、
          </span>
          <p>ゲームだと思ってない？</p>
        </h1>
        <b className='text-center text-lg'>実は、それだけじゃない！</b>
        <b className='text-center text-lg'>デザイン、プログラムの勉強にも Minecraft は使えます！</b>
      </Section>
      <Section fadeIn={1}>
        <h1>『Minecraft』って？</h1>
        <Figure site='tips'>
          Minecraft は、ブロック、モブ、コミュニティで出来ているゲームです。夜を生き抜いたり、芸術作品を作ったり。遊び方はあなた次第です。
        </Figure>
        <p>Minecraft はその独特な世界観と自由度の高さから圧倒的な人気を持つゲームです。</p>
        <p>勿論ですが、<em>Minecraft はゲームとしても立派に楽しむことができます。</em></p>
        <p>サバイバルモードでは冒険や、採掘、拠点を建てるなど、思うがままに生活することができます。</p>
      </Section>
      <Section fadeIn={2}>
        <h1>始めの一歩</h1>
        <p>クリエイティブモードでは、あらゆることの制限がなくなります！</p>
        <p>無尽蔵にある建材で建築を極めたり...</p>
        <p>レッドストーンで簡単な機能を作ったり...</p>
        <p>コマンドで摩訶不思議なこともできます！</p>
        <p>こういったもので Minecraft を理解することは、後々開発する時にも役に立ちます！</p>
        <p>覚えておいて損はありません！</p>
      </Section>
      <Section fadeIn={3}>
        <h1>作りたい時にやってみよう</h1>
        <p>Minecraft をやっていると、やってみたくても実現できなかったことがあると思います。</p>
        <p><em>諦めるにはまだ早いです！</em></p>
        <p>ResroucePack、DataPack、Plugin、Modなど...</p>
        <p>Minecraft には実現できる方法が沢山あります！</p>
        <p>要求されるレベルは上がっていきますが、確実にどんなことでも出来るようになります！</p>
        <p>このサイトでは、そんな道への第一歩を、サポートできればと思います！</p>
      </Section>
      <footer style={{ height: '20vh' }} className='flex flex-col items-center p-4 border-t-2 text-sm text-gray-400 border-t-green-800 bg-green-950'>
        <p>このサイトは<Anchor site='guide'/>に沿って作成されています。</p>
        <p>Minecraft の公式のサイトではありません。Mojang または Microsoft から承認を受けておらず、それとの関連性もありません。</p>
        <p>お問い合わせは@<Anchor site='slack'/>まで</p>
      </footer>
    </Scroll>
  )
}

function Section(props: JSX.IntrinsicElements['div'] & ({ ishead: true } | { fadeIn: number })) {
  const scroll = useScroll(), [opacity, setOpacity] = useState(1)

  if ('fadeIn' in props) {
    useFrame(() => setOpacity(scroll.range(0.15 * props.fadeIn - 0.03, 0.15 * props.fadeIn + 0.05)))
  }

  return (
    <section style={{opacity: opacity}} className={`flex flex-col justify-center h-screen mx-5 xl:mx-52 ${props.className}`}>
      <div {...props} className={`flex flex-col justify-center p-4 ${'ishead' in props ? '' : 'bg-green-900/50'}`} />
    </section>
  )
}

function Figure(props: PropsWithChildren<{ site: keyof typeof sites }>) {
  return (
    <figure className='mx-10'>
      <blockquote cite={sites[props.site].cite} children={props.children} className='p-4 bg-green-950' />
      <figcaption className='p-4 italic text-right'>
        <cite>ー <Anchor site={props.site}/></cite>より引用
      </figcaption>
    </figure>
  )
}

const sites = {
  tips: { href: 'https://www.minecraft.net/minecraft-tips-for-beginners#before_you_begin', cite: 'Minecraft 初心者向けヒント' },
  guide: { href: 'https://www.minecraft.net/usage-guidelines', cite: 'Minecraft 利用ガイドライン' },
  slack: { href: 'https://n-highschool.slack.com/team/U01TQ4M0L1L', cite: 'Unreadabread' },
} as const

function Anchor({site}: {site: keyof typeof sites}) {
  return (
    <a tabIndex={-1} href={sites[site].href} target='_blank' rel='noopener noreferrer'>{sites[site].cite}</a>
  )
}

function BuildingDiorite<R extends [number, number, number?], V extends [R, R, R]>(props: {range: R, position: V, rotation: [R, R, R]}) {
  const ref = useRef<Object3D>(null), scroll = useScroll()
  useFrame(() => {
    if (!ref.current) return
    const range = scroll.range(props.range[0], props.range[1], props.range[2]), {position, rotation} = ref.current
    position.set(...mapVector(props.position, range))
    rotation.set(...mapVector(props.rotation, range))
  })
  return (
    <Suspense fallback="だめぽ">
      <Gltf src={source.diorite} ref={ref}/>
    </Suspense>
  )
}

function mapVector<R extends [number, number, number?]>(vector: [R, R, R], value: number) {
  return vector.map(([total, domain, ever = 0]) => total - domain * value + ever) as [number, number, number]
}

function Fire() {
  const [intensity, setIntensity] = useState(10)

  useFrame(({clock}) => {
    setIntensity(15 + (Math.cos(clock.elapsedTime) * 2 - 1) * 2)
  })

  return (
    <pointLight color='#d74d06' intensity={intensity} position={[-4, -18, 10]} />
  )
}