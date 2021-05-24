import Head from "next/head"
import Link from "next/link"

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <svg
              width="166"
              height="160"
              viewBox="0 0 166 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M81 1L12 13L1 96L130 159L165 135L52 72V28H81V1Z"
                fill="#E84141"
                stroke="black"
              />
            </svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
