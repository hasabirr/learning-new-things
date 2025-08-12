<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside
      class="fixed left-0 top-0 h-full w-64 bg-white shadow-md border-r border-gray-200 z-10"
    >
      <div class="p-6 border-b border-gray-100">
        <h1 class="text-xl font-semibold text-gray-800">Chart Dashboard</h1>
        <p class="text-sm text-gray-500 mt-1">Data Visualization</p>
      </div>

      <nav class="p-4">
        <div class="space-y-2">
          <!-- Bar Chart Section -->
          <div class="chart-section">
            <button
              @click="toggleSection('bar')"
              class="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
              :class="{ 'bg-blue-50 text-blue-700': activeSection === 'bar' }"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-blue-500 rounded flex items-center justify-center"
                >
                  <div class="w-2 h-3 bg-white rounded-sm"></div>
                </div>
                <span class="font-medium">Bar Chart</span>
              </div>
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'bar' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div v-show="activeSection === 'bar'" class="ml-8 mt-2 space-y-1">
              <button
                v-for="option in barChartOptions"
                :key="option.id"
                @click="selectChart('bar', option)"
                class="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                :class="{
                  'bg-blue-100 text-blue-700': selectedChart?.id === option.id,
                }"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <!-- Line Chart Section -->
          <div class="chart-section">
            <button
              @click="toggleSection('line')"
              class="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
              :class="{
                'bg-green-50 text-green-700': activeSection === 'line',
              }"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-green-500 rounded flex items-center justify-center"
                >
                  <div class="w-3 h-1 bg-white rounded-sm"></div>
                </div>
                <span class="font-medium">Line Chart</span>
              </div>
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'line' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div v-show="activeSection === 'line'" class="ml-8 mt-2 space-y-1">
              <button
                v-for="option in lineChartOptions"
                :key="option.id"
                @click="selectChart('line', option)"
                class="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                :class="{
                  'bg-green-100 text-green-700':
                    selectedChart?.id === option.id,
                }"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <!-- Pie Chart Section -->
          <div class="chart-section">
            <button
              @click="toggleSection('pie')"
              class="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
              :class="{
                'bg-purple-50 text-purple-700': activeSection === 'pie',
              }"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center"
                >
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span class="font-medium">Pie Chart</span>
              </div>
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'pie' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div v-show="activeSection === 'pie'" class="ml-8 mt-2 space-y-1">
              <button
                v-for="option in pieChartOptions"
                :key="option.id"
                @click="selectChart('pie', option)"
                class="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                :class="{
                  'bg-purple-100 text-purple-700':
                    selectedChart?.id === option.id,
                }"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <!-- Area Chart Section -->
          <div class="chart-section">
            <button
              @click="toggleSection('area')"
              class="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
              :class="{
                'bg-orange-50 text-orange-700': activeSection === 'area',
              }"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-orange-500 rounded flex items-center justify-center"
                >
                  <div class="w-3 h-2 bg-white rounded-sm opacity-60"></div>
                </div>
                <span class="font-medium">Area Chart</span>
              </div>
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'area' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div v-show="activeSection === 'area'" class="ml-8 mt-2 space-y-1">
              <button
                v-for="option in areaChartOptions"
                :key="option.id"
                @click="selectChart('area', option)"
                class="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                :class="{
                  'bg-orange-100 text-orange-700':
                    selectedChart?.id === option.id,
                }"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="ml-64 p-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{
              selectedChart
                ? `${selectedChart.label} - ${selectedChart.type.toUpperCase()}`
                : "Select a Chart Type"
            }}
          </h2>
          <p class="text-gray-600">
            {{
              selectedChart
                ? selectedChart.description
                : "Choose from the sidebar to visualize your data"
            }}
          </p>
        </div>

        <!-- Chart Container -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div
            v-if="!selectedChart"
            class="flex flex-col items-center justify-center h-96 text-gray-400"
          >
            <svg
              class="w-24 h-24 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            <h3 class="text-lg font-medium mb-2">No Chart Selected</h3>
            <p class="text-center max-w-md">
              Select a chart type from the sidebar to begin visualizing your
              data. Each chart type offers different data visualization options.
            </p>
          </div>

          <div
            v-else
            class="h-96 flex items-center justify-center text-gray-500"
          >
            <div class="text-center">
              <div class="text-6xl mb-4">📊</div>
              <h3 class="text-lg font-medium mb-2">Chart Area</h3>
              <p class="max-w-sm">
                This is where your {{ selectedChart.type }} chart for "{{
                  selectedChart.label
                }}" will be rendered. Connect your chart library here!
              </p>
            </div>
          </div>
        </div>

        <!-- Chart Info Card -->
        <div
          v-if="selectedChart"
          class="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h3 class="font-semibold text-gray-900 mb-3">Chart Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Type</label
              >
              <p class="text-sm text-gray-600 capitalize">
                {{ selectedChart.type }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Category</label
              >
              <p class="text-sm text-gray-600">{{ selectedChart.label }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Data Source</label
              >
              <p class="text-sm text-gray-600">
                {{ selectedChart.dataSource }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// Reactive state
const activeSection = ref(null);
const selectedChart = ref(null);

// Chart options data
const barChartOptions = [
  {
    id: "sales-monthly",
    label: "Monthly Sales",
    type: "bar",
    description: "Compare monthly sales performance across different periods",
    dataSource: "Sales Database",
  },
  {
    id: "revenue-quarterly",
    label: "Quarterly Revenue",
    type: "bar",
    description: "Quarterly revenue breakdown by department",
    dataSource: "Financial Reports",
  },
  {
    id: "product-performance",
    label: "Product Performance",
    type: "bar",
    description: "Product sales comparison and performance metrics",
    dataSource: "Product Analytics",
  },
  {
    id: "employee-productivity",
    label: "Employee Productivity",
    type: "bar",
    description: "Team productivity metrics and comparisons",
    dataSource: "HR Dashboard",
  },
];

const lineChartOptions = [
  {
    id: "website-traffic",
    label: "Website Traffic",
    type: "line",
    description: "Monitor website visitor trends over time",
    dataSource: "Google Analytics",
  },
  {
    id: "stock-prices",
    label: "Stock Prices",
    type: "line",
    description: "Track stock price movements and trends",
    dataSource: "Financial Markets",
  },
  {
    id: "temperature-trends",
    label: "Temperature Trends",
    type: "line",
    description: "Weather temperature patterns and forecasts",
    dataSource: "Weather API",
  },
  {
    id: "user-engagement",
    label: "User Engagement",
    type: "line",
    description: "User activity and engagement over time",
    dataSource: "App Analytics",
  },
];

const pieChartOptions = [
  {
    id: "market-share",
    label: "Market Share",
    type: "pie",
    description: "Company market share distribution by segment",
    dataSource: "Market Research",
  },
  {
    id: "budget-allocation",
    label: "Budget Allocation",
    type: "pie",
    description: "Department budget distribution and allocation",
    dataSource: "Budget Planning",
  },
  {
    id: "demographic-data",
    label: "Demographic Data",
    type: "pie",
    description: "User demographic breakdown and analysis",
    dataSource: "User Surveys",
  },
  {
    id: "device-usage",
    label: "Device Usage",
    type: "pie",
    description: "Platform and device usage statistics",
    dataSource: "Analytics Platform",
  },
];

const areaChartOptions = [
  {
    id: "cumulative-sales",
    label: "Cumulative Sales",
    type: "area",
    description: "Cumulative sales growth over time periods",
    dataSource: "Sales Tracking",
  },
  {
    id: "server-performance",
    label: "Server Performance",
    type: "area",
    description: "Server load and performance metrics",
    dataSource: "System Monitoring",
  },
  {
    id: "social-media-reach",
    label: "Social Media Reach",
    type: "area",
    description: "Social media engagement and reach metrics",
    dataSource: "Social Analytics",
  },
  {
    id: "inventory-levels",
    label: "Inventory Levels",
    type: "area",
    description: "Stock levels and inventory management",
    dataSource: "Warehouse System",
  },
];

// Methods
const toggleSection = (section) => {
  activeSection.value = activeSection.value === section ? null : section;
};

const selectChart = (type, option) => {
  selectedChart.value = option;
};
</script>

<style scoped>
.chart-section {
  @apply mb-1;
}

/* Custom scrollbar for sidebar if needed */
aside::-webkit-scrollbar {
  width: 4px;
}

aside::-webkit-scrollbar-track {
  background: #f1f1f1;
}

aside::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
