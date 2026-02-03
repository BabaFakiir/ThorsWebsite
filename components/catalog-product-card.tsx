import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { CatalogProduct } from '@/lib/catalog-data';

interface CatalogProductCardProps {
  product: CatalogProduct;
}

export function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <Card className="bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-900">
          {product.name}
        </CardTitle>
        {product.description && (
          <p className="text-sm text-gray-600 font-normal mt-1">
            {product.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div
          className={`grid gap-x-6 text-sm text-gray-900 border border-gray-300 rounded-md px-3 py-2 ${
            product.specs.length > 7 ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <ul className="space-y-1.5 list-none p-0 m-0">
            {product.specs.slice(0, 7).map((spec, index) => (
              <li key={index} className="leading-snug">
                {spec}
              </li>
            ))}
          </ul>
          {product.specs.length > 7 && (
            <ul className="space-y-1.5 list-none p-0 m-0">
              {product.specs.slice(7, 14).map((spec, index) => (
                <li key={index} className="leading-snug">
                  {spec}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
