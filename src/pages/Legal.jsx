import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import site from '../data/site.json'
import SEO from '../components/SEO'

const content = {
  privacy: {
    title: 'Privacy Policy',
    updated: '20 September 2026',
    body: [
      {
        heading: 'No data leaves your device',
        text: `${site.brand.name} is designed as an on-device-only application. All household financial data you enter — income, expenses, budgets, savings goals and loan records — is stored in an encrypted local database on your phone. We do not operate a server that receives, stores or processes this data.`,
      },
      {
        heading: 'What we don’t collect',
        text: 'We do not collect your name, bank details, transaction history, or any personally identifiable financial information. There are no third-party analytics or advertising SDKs embedded in the app.',
      },
      {
        heading: 'Device permissions',
        text: 'HALK requests biometric permissions (Face ID / fingerprint) solely to lock the app locally, and storage/document permissions solely to let you export or import your own data. These permissions are never used to transmit data off your device.',
      },
      {
        heading: 'Your control',
        text: 'You can export or delete your data at any time from within the app. Uninstalling the app removes all locally stored data.',
      },
      {
        heading: 'Changes to this policy',
        text: 'If this policy changes, the updated version will be published on this page with a revised date above.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    updated: '20 September 2026',
    body: [
      {
        heading: 'Acceptance',
        text: `By downloading or using ${site.brand.name}, you agree to these terms. If you do not agree, please do not use the app.`,
      },
      {
        heading: 'Use of the app',
        text: 'HALK is provided as a personal budgeting tool for informational purposes. It is not a financial, tax, or investment advisory service, and decisions you make based on the app remain your own responsibility.',
      },
      {
        heading: 'Distribution',
        text: 'HALK is currently distributed as a direct APK download while it completes app-store review. Only install the APK from this official site to ensure you are running an unmodified build.',
      },
      {
        heading: 'No warranty',
        text: 'The app is provided "as is" without warranties of any kind. We do our best to keep it reliable, but are not liable for any loss arising from its use.',
      },
      {
        heading: 'Changes',
        text: 'We may update these terms as the app evolves; continued use after changes constitutes acceptance of the revised terms.',
      },
    ],
  },
}

export default function Legal({ page }) {
  const data = content[page]

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
      <SEO title={data.title} path={`/${page}`} noindex={false} />
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white">
        <ArrowLeft size={16} />
        Back to {site.brand.name}
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{data.title}</h1>
      <p className="mt-2 text-sm text-ink-500">Last updated {data.updated}</p>

      <div className="mt-10 space-y-8">
        {data.body.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-white">{section.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
