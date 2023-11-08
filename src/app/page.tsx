import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <h1>Minecraft のこと、ゲームだと思ってない？</h1>
        <p>それだけじゃ勿体ない！</p>
        <p>デザイン、プログラムとしてのMinecraftを知ろう！</p>
      </header>
      <main>
        <section>
          <h1>『Minecraft』って？</h1>
          <figure>
            <blockquote>
              Minecraft（マインクラフト）は、Mojang Studiosが開発した3次元サンドボックス型のゲームで、プレイヤーはブロックやエンティティで構成された3次元の環境を自由に操作してプレイすることができます。その多様なゲーム性は、プレイヤーが遊び方を選ぶことができ、無数の可能性を秘めています。
            </blockquote>
            <figcaption>
              <cite><a href='https://minecraft.fandom.com/ja/wiki/Minecraft_Wiki'>Minecraft Wiki</a></cite>より引用
            </figcaption>
          </figure>
          <p>
            Minecraftはその独特な世界観と自由度の高さから圧倒的な人気を持つゲームです。
            サバイバルモードで冒険をして、拠点を建てて、色んなことをする...
            <u>Minecraftはゲームとしても立派に楽しむことができます。</u>
          </p>
        </section>
        <section>
          <h1>でも、もっとクリエイティブに</h1>
          <p>
            サバイバルモードをした後、他のこともしてみたくてクリエイティブモードをすることがあるかもしれません。
            資材が限られていないこのモードでは、建築やレッドストーンといったサバイバルモードでは難しいような、高度なことも簡単にできるようにします。
            これらの高度な要素は、実際にMinecraftで建築をするための企業が興されるほどに、奥深くもあります。
          </p>
        </section>
        <section>
          <h1>プログラムへの第一歩</h1>
          <p>
            クリエイティブモードをするうちに、『コマンド』に触れることがあるかもしれません。
            ”/”から始まって、英単語を空白で挟んで並べていくのは、まさに英語のようで覚えるのが大変かもしれません。
            しかし、<u>コマンドを実行したことで、五感でわかりやすい効果を得られることは、覚える上でとても役に立ちます</u>。
            調べながらでも、自分で書くことができれば、もしかしたらそれは立派な『プログラム』かもしれません。
            実際、<u>スプリクト言語で書くコードは文字数は少なく、実行することに重きを置いている面において、似た点を持っています</u>。
          </p>
        </section>
        <section>
          <h1>ならば、ここから</h1>
          <p>
            コマンドから派生して出来ることは沢山あります。
          </p>
        </section>
        <section>
          <h1>「Modを作りたい」は憧れまでで</h1>
          <p>
            Minecraftをやり尽くす勢いで遊ぶなら、Modをすることもあるかもしれません。
            「Mod」はMinecraftのプログラムを書き換えて、オリジナルの要素を追加するコンテンツです。
            これまでのMinecraftにないような独自の機能の数々は、きっと虜にするでしょう。
            そして、やっていくうちに、こういうことをやってみたいから発展して、「作ってみたい」となった時、大抵は挫折します。
            情報量が少ない上に、あっても英語、古すぎて今は使えない。ということが殆どなので、完成まで行くことは難しいです。
          </p>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

/*
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
*/