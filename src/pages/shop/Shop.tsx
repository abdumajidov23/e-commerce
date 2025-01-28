import React, { useState, useMemo, useCallback } from 'react';
import TopBanner from '../../components/top-banner/TopBanner';
import ProductCard from '../../components/product-card/ProductCard';
import CustomerService from '../../components/customer-service/CustomerService';

// Types
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
  discount?: string;
  image: string;
}

type ViewMode = 'grid' | 'list';
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

// Products list (28 items)
const products: Product[] = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: 'Stylish and comfortable',
  price: `$${(100 + index * 10).toFixed(2)}`,
  discountPrice: index % 2 === 0 ? `$${(80 + index * 10).toFixed(2)}` : undefined,
  discount: index % 2 === 0 ? '-20%' : undefined,
  image: `/images/product_${index + 1}.png`,
}));

function Shop() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Memoize sorted products
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
      case 'price-desc':
        return sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [sortBy]);

  // Memoize pagination values
  const { startIndex, endIndex, totalPages } = useMemo(() => ({
    startIndex: (currentPage - 1) * itemsPerPage + 1,
    endIndex: Math.min(currentPage * itemsPerPage, sortedProducts.length),
    totalPages: Math.ceil(sortedProducts.length / itemsPerPage)
  }), [currentPage, itemsPerPage, sortedProducts.length]);

  // Handlers
  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, []);

  const handleItemsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when items per page changes
  }, []);

  const handleFilterClick = useCallback(() => {
    console.log('Filter clicked');
    // Implement filter logic here
  }, []);

  const changePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderPageButtons = useMemo(() => (
    [...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`py-2 px-4 rounded-md ${
          currentPage === index + 1
            ? 'bg-[#B88E2F] text-white'
            : 'bg-[#F9F1E7] text-gray-700 hover:bg-[#E9E1D7]'
        }`}
        onClick={() => changePage(index + 1)}
        aria-label={`Page ${index + 1}`}
      >
        {index + 1}
      </button>
    ))
  ), [currentPage, totalPages, changePage]);

  return (
    <div className="min-h-screen">
      <TopBanner currentPage="Shop" />

      <div className="bg-[#F9F1E7] mb-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between py-3 px-4">
          {/* Filters and Views */}
          <div className="flex items-center mb-3 md:mb-0">
            <button 
              className="mr-3 hover:opacity-80 transition-opacity" 
              onClick={handleFilterClick}
              aria-label="Filter products"
            >
              <img src="/images/filter.svg" alt="Filter" className="w-6 h-6" />
            </button>
            <button
              className={`mr-3 transition-opacity ${viewMode === 'grid' ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <img src="/images/show_grid.svg" alt="Grid View" className="w-6 h-6" />
            </button>
            <button
              className={`mr-5 transition-opacity ${viewMode === 'list' ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <img src="/images/show_list.svg" alt="List View" className="w-6 h-6" />
            </button>
            <p className="text-sm text-gray-500">
              Showing {startIndex}-{endIndex} of {sortedProducts.length} results
            </p>
          </div>

          {/* Sorting */}
          <div className="flex items-center flex-wrap gap-2">
            <label htmlFor="itemsPerPage" className="text-sm">Show</label>
            <select
              id="itemsPerPage"
              className="bg-white text-gray-700 mr-3 py-2 px-3 rounded hover:bg-gray-50 focus:ring-2 focus:ring-[#B88E2F]"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              {[16, 32, 48].map((count) => (
                <option key={count} value={count}>{count}</option>
              ))}
            </select>
            
            <label htmlFor="sortBy" className="text-sm">Sort By</label>
            <select
              id="sortBy"
              className="bg-white text-gray-700 py-2 px-3 rounded hover:bg-gray-50 focus:ring-2 focus:ring-[#B88E2F]"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4">
        <div
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'
              : 'flex flex-col gap-5'
          }`}
        >
          {sortedProducts
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>

        {/* Pagination */}
        <div className="mb-5 flex justify-center gap-3 mt-8 flex-wrap">
          {renderPageButtons}
        </div>
      </div>

      <CustomerService />
    </div>
  );
}

export default Shop;