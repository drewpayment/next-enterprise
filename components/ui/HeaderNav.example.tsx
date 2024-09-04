import Link from 'next/link';


export default function HeaderNav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  )
}