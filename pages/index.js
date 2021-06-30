import Navbar from '../Components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
        <h2>
          <Link href="/jobs"><a className="nav-link"> Go To Jobs Page</a></Link>
        </h2>
      </div>
    </div>
  )
}
