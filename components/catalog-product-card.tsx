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
        <dl className="space-y-2">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-4 text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0"
            >
              <dt className="font-medium text-gray-600 shrink-0">{spec.label}</dt>
              <dd className="text-gray-900 text-right">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
