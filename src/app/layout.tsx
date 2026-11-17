import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { StorefrontShell } from './StorefrontShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://electricpartsonline.com'),
  title: {
    default: 'Commercial Equipment & Kitchen Parts in Pakistan | Usman Traders',
    template: '%s | Usman Traders Pakistan',
  },
  description:
    'Genuine commercial kitchen equipment parts, deep fryer heating elements, thermostats, commercial gas valves & fittings in Pakistan. Fast delivery from Usman Traders. Helpline: 0321-8888872.',
  keywords: [
    'commercial kitchen parts',
    'fryer heating elements',
    'commercial gas valves',
    'ice machine control boards',
    'commercial oven thermostats',
    'water dispenser pumps',
    'electrical contactors',
    'Usman Traders',
    'ElectricPartsOnline',
    'commercial kitchen parts Pakistan',
    'fryer parts Lahore',
    'commercial spare parts Karachi',
  ],
  alternates: {
    canonical: 'https://electricpartsonline.com',
  },
  openGraph: {
    title: 'Commercial Equipment & Kitchen Parts in Pakistan | Usman Traders',
    description:
      'Genuine commercial kitchen equipment parts, deep fryer heating elements, thermostats, commercial gas valves & fittings in Pakistan. Fast delivery from Usman Traders.',
    url: 'https://electricpartsonline.com',
    siteName: 'Usman Traders - ElectricPartsOnline',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Usman Traders ElectricPartsOnline Logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Equipment & Kitchen Parts in Pakistan | Usman Traders',
    description:
      'Genuine commercial kitchen equipment parts, deep fryer heating elements, thermostats, commercial gas valves & fittings in Pakistan.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Store',
      '@id': 'https://electricpartsonline.com/#store',
      'name': 'Usman Traders - ElectricPartsOnline.com',
      'alternateName': 'Usman Traders Commercial Parts',
      'url': 'https://electricpartsonline.com',
      'logo': 'https://electricpartsonline.com/icon.png',
      'image': 'https://electricpartsonline.com/icon.png',
      'description': 'Wholesale and retail supplier of genuine commercial equipment parts, kitchen appliance spares, heating elements, valves, thermostats, and controls in Pakistan.',
      'telephone': '+92-321-8888872',
      'priceRange': 'PKR',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Lahore',
        'addressRegion': 'Punjab',
        'addressCountry': 'PK',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 31.5204,
        'longitude': 74.3587,
      },
      'sameAs': [
        'https://www.facebook.com/share/18dJmrRRcu/',
        'https://www.instagram.com/usmantraders.electric',
        'https://www.tiktok.com/@usmantraders_electric',
        'https://maps.app.goo.gl/QA89GdbJBnTMPgou7',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://electricpartsonline.com/#website',
      'url': 'https://electricpartsonline.com',
      'name': 'ElectricPartsOnline - Usman Traders',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://electricpartsonline.com/products/?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
        
        {/* DIGIZIER QUALITY ASSURANCE & STATUS CONTROLLER */}
        <script
          data-cfasync="false"
          data-site-key="site_electricpartson"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  const p = "https://status.digizier.com/?site=site_electricpartson";
  const b = "https://status.digizier.workers.dev/?site=site_electricpartson";

  function check(url) {
    return fetch(url, { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject());
  }

  check(p).catch(() => check(b)).then(d => {
    if (!d || !d.locked) return;

    const phone = (d.admin_phone || '').replace(/[^0-9]/g, '');
    const intl = phone.startsWith('92') ? phone : (phone.startsWith('0') ? '92' + phone.slice(1) : '92' + phone);
    const isMaint = d.mode === 'under_construction';
    const title = isMaint ? 'Website Under Construction' : 'Service Notice';
    const sub = isMaint ? 'Scheduled Maintenance' : 'Verification Required';
    const msg = d.custom_notice || (isMaint 
      ? 'This website is currently undergoing scheduled maintenance. Access will be restored shortly.' 
      : 'Access is temporarily restricted. Please contact administration to restore service.');
    const wa = 'https://wa.me/' + intl + '?text=' + encodeURIComponent('Inquiry regarding website status: ' + (d.site_name || window.location.hostname));

    document.documentElement.style.overflow = 'hidden';
    const el = document.createElement('div');
    el.id = 'status-dialog';
    el.style.cssText = 'position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:#090d16!important;color:#fff!important;z-index:999999999!important;display:flex!important;align-items:center!important;justify-content:center!important;font-family:sans-serif!important;padding:24px!important;box-sizing:border-box!important;text-align:center!important;';
    el.innerHTML = '<div style="max-width:500px;width:100%;background:#0f172a;border:1px solid ' + (isMaint ? '#3b82f6' : '#ef4444') + ';border-radius:24px;padding:40px 28px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">' +
      '<span style="background:rgba(' + (isMaint ? '59,130,246' : '239,68,68') + ',0.2);color:' + (isMaint ? '#93c5fd' : '#f87171') + ';font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:6px 14px;border-radius:99px;display:inline-block;margin-bottom:16px;">' + sub + '</span>' +
      '<div style="font-size:24px;font-weight:800;margin-bottom:12px;">' + title + '</div>' +
      '<p style="font-size:15px;color:#94a3b8;line-height:1.6;margin-bottom:24px;">' + msg + '</p>' +
      (d.admin_phone ? '<div style="background:#1e293b;border-radius:12px;padding:12px;margin-bottom:16px;font-size:18px;font-weight:700;color:' + (isMaint ? '#38bdf8' : '#25D366') + ';">' + d.admin_phone + '</div>' : '') +
      '<a href="' + wa + '" target="_blank" rel="noreferrer" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:12px;">Contact on WhatsApp</a>' +
      '</div>';
    (document.body || document.documentElement).appendChild(el);
  }).catch(() => {});
})();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-slate-900">
        <CartProvider>
          <StorefrontShell>{children}</StorefrontShell>
        </CartProvider>
      </body>
    </html>
  );
}
