import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
  BarChart3,
  PieChart,
  Building2,
  Coffee,
  Utensils
} from 'lucide-react';
import { ROICalculatorTranslations } from '../types/i18n/roi-calculator-translations';

interface ROICalculatorPageProps {
  translations?: ROICalculatorTranslations;
}

const ROICalculatorPage: React.FC<ROICalculatorPageProps> = ({ translations }) => {
  const { t } = useTranslation('components/roi-calculator');
  
  // Use translations prop if provided, otherwise use t function
  const getTranslation = (key: string) => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      for (const k of keys) {
        result = result?.[k];
      }
      return result || key;
    }
    return t(key);
  };

  const [formData, setFormData] = useState({
    businessType: 'restaurant',
    locations: 1,
    avgEmployees: 15,
    avgHourlyWage: 18,
    hoursPerWeek: 40,
    currentLaborCostPercentage: 32,
    schedulingHoursPerWeek: 8,
    managerHourlyRate: 35,
    turnoverRate: 42,
    hiringCost: 2500,
    region: 'US'
  });

  const [results, setResults] = useState({
    currentAnnualLaborCost: 0,
    optimizedAnnualLaborCost: 0,
    annualSavings: 0,
    schedulingTimeSavings: 0,
    schedulingCostSavings: 0,
    turnoverSavings: 0,
    totalAnnualSavings: 0,
    monthlyROI: 0,
    paybackPeriod: 0,
    fiveYearSavings: 0
  });

  const businessTypes = [
    { value: 'restaurant', label: getTranslation('formSection.businessTypes.restaurant'), icon: Utensils },
    { value: 'hotel', label: getTranslation('formSection.businessTypes.hotel'), icon: Building2 },
    { value: 'cafe', label: getTranslation('formSection.businessTypes.cafe'), icon: Coffee }
  ];

  const regions = [
    { value: 'US', label: getTranslation('formSection.regions.US'), savings: 23 },
    { value: 'EU', label: getTranslation('formSection.regions.EU'), savings: 20 },
    { value: 'LATAM', label: getTranslation('formSection.regions.LATAM'), savings: 25 },
    { value: 'APAC', label: getTranslation('formSection.regions.APAC'), savings: 22 }
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const {
      locations,
      avgEmployees,
      avgHourlyWage,
      hoursPerWeek,
      currentLaborCostPercentage,
      schedulingHoursPerWeek,
      managerHourlyRate,
      turnoverRate,
      hiringCost,
      region
    } = formData;

    // Get region-specific savings percentage
    const regionData = regions.find(r => r.value === region);
    const savingsPercentage = regionData ? regionData.savings : 23;

    // Current annual labor cost
    const weeklyLaborCost = avgEmployees * avgHourlyWage * hoursPerWeek;
    const currentAnnualLaborCost = weeklyLaborCost * 52 * locations;

    // Optimized labor cost (with AI savings)
    const optimizedAnnualLaborCost = currentAnnualLaborCost * (1 - savingsPercentage / 100);
    const annualSavings = currentAnnualLaborCost - optimizedAnnualLaborCost;

    // Scheduling time savings
    const schedulingTimeSavings = schedulingHoursPerWeek * 0.78; // 78% reduction
    const schedulingCostSavings = schedulingTimeSavings * managerHourlyRate * 52 * locations;

    // Turnover reduction savings
    const currentTurnoverCost = (turnoverRate / 100) * avgEmployees * hiringCost * locations;
    const optimizedTurnoverRate = turnoverRate * 0.57; // 43% reduction in turnover
    const optimizedTurnoverCost = (optimizedTurnoverRate / 100) * avgEmployees * hiringCost * locations;
    const turnoverSavings = currentTurnoverCost - optimizedTurnoverCost;

    // Total savings
    const totalAnnualSavings = annualSavings + schedulingCostSavings + turnoverSavings;

    // ROI calculations
    const monthlyOptimoCost = locations * 249; // Average pricing
    const annualOptimoCost = monthlyOptimoCost * 12;
    const netAnnualSavings = totalAnnualSavings - annualOptimoCost;
    const monthlyROI = (netAnnualSavings / annualOptimoCost) * 100;
    const paybackPeriod = annualOptimoCost / (totalAnnualSavings / 12);
    const fiveYearSavings = netAnnualSavings * 5;

    setResults({
      currentAnnualLaborCost,
      optimizedAnnualLaborCost,
      annualSavings,
      schedulingTimeSavings,
      schedulingCostSavings,
      turnoverSavings,
      totalAnnualSavings,
      monthlyROI,
      paybackPeriod,
      fiveYearSavings
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number, decimals: number = 1) => {
    return num.toFixed(decimals);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-pulse-slow">
              <Calculator size={48} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-ibm-plex-sans font-bold leading-tight mb-6">
              {getTranslation('heroSection.title.mainHeading')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              {getTranslation('heroSection.subtitle.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                {getTranslation('heroSection.buttons.startCalculating')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                {getTranslation('heroSection.buttons.sampleReport')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Calculator className="text-primary" size={32} />
              {getTranslation('formSection.title.mainHeading')}
            </h2>

            <div className="space-y-6">
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.businessType')}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {businessTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => handleInputChange('businessType', type.value)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          formData.businessType === type.value
                            ? 'border-primary bg-blue-50 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon size={24} className="mx-auto mb-2" />
                        <div className="text-sm font-medium">{type.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.region')}
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label} ({region.savings}% {getTranslation('formSection.regionSavings')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Locations */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.locations')}
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Average Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.avgEmployees')}
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={formData.avgEmployees}
                  onChange={(e) => handleInputChange('avgEmployees', parseInt(e.target.value) || 15)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Average Hourly Wage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.avgHourlyWage')}
                </label>
                <input
                  type="number"
                  min="7"
                  max="100"
                  step="0.50"
                  value={formData.avgHourlyWage}
                  onChange={(e) => handleInputChange('avgHourlyWage', parseFloat(e.target.value) || 18)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Hours per Week */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.hoursPerWeek')}
                </label>
                <input
                  type="number"
                  min="10"
                  max="60"
                  value={formData.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', parseInt(e.target.value) || 40)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Scheduling Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.schedulingHours')}
                </label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={formData.schedulingHoursPerWeek}
                  onChange={(e) => handleInputChange('schedulingHoursPerWeek', parseInt(e.target.value) || 8)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Manager Hourly Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.managerRate')}
                </label>
                <input
                  type="number"
                  min="15"
                  max="100"
                  step="0.50"
                  value={formData.managerHourlyRate}
                  onChange={(e) => handleInputChange('managerHourlyRate', parseFloat(e.target.value) || 35)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Turnover Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.turnoverRate')}
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.turnoverRate}
                  onChange={(e) => handleInputChange('turnoverRate', parseInt(e.target.value) || 42)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Hiring Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getTranslation('formSection.labels.hiringCost')}
                </label>
                <input
                  type="number"
                  min="500"
                  max="10000"
                  step="100"
                  value={formData.hiringCost}
                  onChange={(e) => handleInputChange('hiringCost', parseInt(e.target.value) || 2500)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-8">
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp size={32} />
                {getTranslation('resultsSection.title.mainHeading')}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(results.totalAnnualSavings)}
                  </div>
                  <div className="text-sm opacity-90">{getTranslation('resultsSection.metrics.totalAnnualSavings')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">
                    {formatNumber(results.paybackPeriod)} {getTranslation('units.months')}
                  </div>
                  <div className="text-sm opacity-90">{getTranslation('resultsSection.metrics.paybackPeriod')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">
                    {formatNumber(results.monthlyROI)}{getTranslation('units.percent')}
                  </div>
                  <div className="text-sm opacity-90">{getTranslation('resultsSection.metrics.annualROI')}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(results.fiveYearSavings)}
                  </div>
                  <div className="text-sm opacity-90">{getTranslation('resultsSection.metrics.fiveYearSavings')}</div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BarChart3 className="text-primary" size={32} />
                {getTranslation('resultsSection.breakdown.title')}
              </h3>

              <div className="space-y-6">
                {/* Labor Cost Savings */}
                <div className="border-l-4 border-secondary pl-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{getTranslation('resultsSection.breakdown.laborOptimization.title')}</h4>
                    <span className="text-2xl font-bold text-secondary">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {getTranslation('resultsSection.breakdown.laborOptimization.description')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.laborOptimization.currentCost')}:</span>
                      <span className="font-semibold">{formatCurrency(results.currentAnnualLaborCost)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.laborOptimization.optimizedCost')}:</span>
                      <span className="font-semibold">{formatCurrency(results.optimizedAnnualLaborCost)}</span>
                    </div>
                  </div>
                </div>

                {/* Scheduling Time Savings */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{getTranslation('resultsSection.breakdown.schedulingTime.title')}</h4>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(results.schedulingCostSavings)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {getTranslation('resultsSection.breakdown.schedulingTime.description')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.schedulingTime.timeSaved')}:</span>
                      <span className="font-semibold">{formatNumber(results.schedulingTimeSavings)} {getTranslation('units.hours')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.schedulingTime.managerRate')}:</span>
                      <span className="font-semibold">${formData.managerHourlyRate}/hour</span>
                    </div>
                  </div>
                </div>

                {/* Turnover Reduction */}
                <div className="border-l-4 border-accent-latam pl-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{getTranslation('resultsSection.breakdown.turnoverReduction.title')}</h4>
                    <span className="text-2xl font-bold text-accent-latam">
                      {formatCurrency(results.turnoverSavings)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {getTranslation('resultsSection.breakdown.turnoverReduction.description')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.turnoverReduction.currentRate')}:</span>
                      <span className="font-semibold">{formData.turnoverRate}{getTranslation('units.percent')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{getTranslation('resultsSection.breakdown.turnoverReduction.optimizedRate')}:</span>
                      <span className="font-semibold">{formatNumber(formData.turnoverRate * 0.57)}{getTranslation('units.percent')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{getTranslation('actionButtons.sectionTitle')}</h3>
              <div className="space-y-4">
                <button className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Download size={24} />
                  {getTranslation('actionButtons.downloadReport')}
                </button>
                <button className="w-full bg-secondary hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Target size={24} />
                  {getTranslation('actionButtons.scheduleDemo')}
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                  <Share2 size={24} />
                  {getTranslation('actionButtons.shareResults')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Benchmarks */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {getTranslation('benchmarksSection.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Users size={40} className="text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('benchmarksSection.categories.turnover.title')}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.turnover.industry')}:</span>
                  <span className="font-semibold text-red-600">42%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.turnover.withOptimo')}:</span>
                  <span className="font-semibold text-secondary">18%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
                <Clock size={40} className="text-orange-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('benchmarksSection.categories.schedulingTime.title')}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.schedulingTime.industry')}:</span>
                  <span className="font-semibold text-orange-600">9 hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.schedulingTime.withOptimo')}:</span>
                  <span className="font-semibold text-secondary">2 hrs/week</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <DollarSign size={40} className="text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('benchmarksSection.categories.laborCost.title')}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.laborCost.industry')}:</span>
                  <span className="font-semibold text-blue-600">32%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{getTranslation('benchmarksSection.categories.laborCost.withOptimo')}:</span>
                  <span className="font-semibold text-secondary">24%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {getTranslation('ctaSection.title')}
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            {getTranslation('ctaSection.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <CheckCircle size={24} />
              {getTranslation('ctaSection.buttons.startTrial')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
              {getTranslation('ctaSection.buttons.scheduleDemo')}
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white border-opacity-20">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{getTranslation('ctaSection.features.trialDays')}</div>
              <div className="text-blue-200 text-sm">{getTranslation('ctaSection.featureLabels.trialDays')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{getTranslation('ctaSection.features.setupTime')}</div>
              <div className="text-blue-200 text-sm">{getTranslation('ctaSection.featureLabels.setupTime')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{getTranslation('ctaSection.features.guaranteedSavings')}</div>
              <div className="text-blue-200 text-sm">{getTranslation('ctaSection.featureLabels.guaranteedSavings')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{getTranslation('ctaSection.features.support')}</div>
              <div className="text-blue-200 text-sm">{getTranslation('ctaSection.featureLabels.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculatorPage;
