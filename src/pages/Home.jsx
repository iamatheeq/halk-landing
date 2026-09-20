import { useRef } from 'react'
import site from '../data/site.json'
import { useGeo } from '../hooks/useGeo'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Screens from '../components/Screens'
import DownloadCTA from '../components/DownloadCTA'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const geo = useGeo(site.geo)
  const downloadRef = useRef(null)

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <SEO path="/" geo={geo} />
      <Navbar onDownloadClick={scrollToDownload} />
      <main>
        <Hero onDownloadClick={scrollToDownload} geo={geo} />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Screens />
        <DownloadCTA ref={downloadRef} />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
