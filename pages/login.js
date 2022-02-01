import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Login() {
  return (
    <Layout home>
      <Head>
        <title>Login</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form>
            <label>
                Email:
                <input type="text" name="email" />
            </label>

            <label>
                Password:
                <input type="password" name="password" />
            </label>

            <input type="submit" value="Submit" />
        </form>

        <Link href='/posts/register'>
            <a>New user? Register here</a>
        </Link>

      </section>

      
    </Layout>
  )
}
