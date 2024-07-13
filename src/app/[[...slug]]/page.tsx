import '../../index.css'
import { ClientOnly } from './client'

export function generateStaticParams() {
  return [{ slug: [''] }, { slug: ['favicon.ico'] }]
}

export default function Page() {
  return <ClientOnly />
}