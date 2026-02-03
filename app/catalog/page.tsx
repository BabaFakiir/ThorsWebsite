import Link from 'next/link';
import Header from '@/components/header';
import { CatalogProductCard } from '@/components/catalog-product-card';
import { catalogSections } from '@/lib/catalog-data';
import { ArrowLeft } from 'lucide-react';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="pt-20 pb-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4af37] transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Product Catalog
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Explore our complete range of premium car accessories. Each product is listed with full specifications.
          </p>
        </div>

        {/* Category menu bar - sticky */}
        <nav
          className="sticky top-20 z-30 bg-white border-y border-gray-200 shadow-sm"
          aria-label="Catalog categories"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-1 py-2">
              {catalogSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#d4af37] hover:bg-gray-50 rounded-md transition-colors whitespace-nowrap"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Catalog sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-8">
          {catalogSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32"
            >
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-2 border-[#d4af37] pb-2 inline-block">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="mt-3 text-gray-600 max-w-3xl">
                    {section.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.products.map((product) => (
                  <CatalogProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Thors — Premium Car Accessories. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
