import Head from 'next/head'

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title} | VCG</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default CustomHead
