import Head from 'components/head'
import Template from 'components/templates/main'
import Button from 'components/button'

const Home = ({ posts }) => {
  console.log({ posts })
  return (
    <Template>
      <Head title='Home' />

      <h1>Home</h1>
      <Button text='Opem team page' href='/team' />

      <ul>
        {posts.results.map((item, index) => (
          <li key={index}>{item.collectionName || item.artistName}</li>
        ))}
      </ul>
    </Template>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://itunes.apple.com/lookup?id=909253&entity=album')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Home
