import React, { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard/GroupCard';
import { useLoaderData } from 'react-router';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';

const AllGroups = () => {
  const allGroups = useLoaderData();
  const [filteredGroups, setFilteredGroups] = useState(allGroups);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    sort: 'newest'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique filter options
  const categories = [...new Set(allGroups.map(g => g.hobbyCategory))];
  const locations = [...new Set(allGroups.map(g => g.location))];

  // Apply filters whenever dependencies change
  useEffect(() => {
    let results = [...allGroups];

    // Apply search
    if (searchTerm) {
      results = results.filter(group =>
        group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      results = results.filter(group => group.hobbyCategory === filters.category);
    }

    // Apply location filter
    if (filters.location) {
      results = results.filter(group => group.location === filters.location);
    }

    // Apply sorting
    if (filters.sort === 'members') {
      results.sort((a, b) => b.members - a.members);
    } else {
      results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredGroups(results);
  }, [allGroups, searchTerm, filters]);

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({ category: '', location: '', sort: 'newest' });
  };

  const hasActiveFilters = searchTerm || filters.category || filters.location || filters.sort !== 'newest';

  return (
    <div className="w-11/12 mx-auto py-8 mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Groups</h1>
        <p className="text-gray-600">Find communities that match your interests</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden btn btn-outline flex items-center gap-2"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <FiFilter /> Filters
          </button>
        </div>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <div className="mt-4 md:hidden space-y-4">
            <FilterSelect
              label="Category"
              options={categories}
              value={filters.category}
              onChange={(value) => setFilters({...filters, category: value})}
            />
            <FilterSelect
              label="Location"
              options={locations}
              value={filters.location}
              onChange={(value) => setFilters({...filters, location: value})}
            />
            <FilterSelect
              label="Sort By"
              options={['Newest', 'Most Members']}
              value={filters.sort === 'newest' ? 'Newest' : 'Most Members'}
              onChange={(value) => setFilters({...filters, sort: value === 'Newest' ? 'newest' : 'members'})}
            />
          </div>
        )}

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-4 mt-4">
          <FilterSelect
            label="Category"
            options={categories}
            value={filters.category}
            onChange={(value) => setFilters({...filters, category: value})}
          />
          <FilterSelect
            label="Location"
            options={locations}
            value={filters.location}
            onChange={(value) => setFilters({...filters, location: value})}
          />
          <FilterSelect
            label="Sort By"
            options={['Newest', 'Most Members']}
            value={filters.sort === 'newest' ? 'Newest' : 'Most Members'}
            onChange={(value) => setFilters({...filters, sort: value === 'Newest' ? 'newest' : 'members'})}
          />
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Filters:</span>
            {searchTerm && (
              <FilterBadge
                label={`Search: "${searchTerm}"`}
                onRemove={() => setSearchTerm('')}
              />
            )}
            {filters.category && (
              <FilterBadge
                label={`Category: ${filters.category}`}
                onRemove={() => setFilters({...filters, category: ''})}
              />
            )}
            {filters.location && (
              <FilterBadge
                label={`Location: ${filters.location}`}
                onRemove={() => setFilters({...filters, location: ''})}
              />
            )}
            {filters.sort !== 'newest' && (
              <FilterBadge
                label={`Sort: Most Members`}
                onRemove={() => setFilters({...filters, sort: 'newest'})}
              />
            )}
            <button
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800 ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-gray-600">
          {filteredGroups.length} {filteredGroups.length === 1 ? 'group' : 'groups'} found
        </p>
      </div>

      {/* Groups Grid */}
      {filteredGroups.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGroups.map(group => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-12 rounded-lg shadow-sm border border-gray-200">
          <FiSearch className="mx-auto text-4xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No groups found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filters
          </p>
          <button
            onClick={resetFilters}
            className="btn btn-primary"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

// Reusable Filter Select Component
const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All {label}s</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

// Reusable Filter Badge Component
const FilterBadge = ({ label, onRemove }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="ml-1 text-gray-500 hover:text-gray-700"
      >
        <FiX size={14} />
      </button>
    </div>
  );
};

export default AllGroups;
