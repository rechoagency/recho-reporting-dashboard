// Dummy Data - Anonymized Reddit Campaign (Extended for WoW/MoM calculations)
// Performance adjusted to show realistic, moderate results (ROAS ~3.2, Upvote Rate ~84%)
// Added: comments, brandMentions for organic engagement tracking
const rawData = [
    // Week 1 (Oct 25-31) - For WoW comparison
    {date: '2025-10-25', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1100, clicks: 22, conversions: 1, revenue: 110.00, cost: 0.00, upvotes: 280, downvotes: 52, newUsers: 18},
    {date: '2025-10-25', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 52000, clicks: 320, conversions: 9, revenue: 990.00, cost: 380.00, upvotes: 8, downvotes: 2, newUsers: 280},
    {date: '2025-10-26', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 800, clicks: 14, conversions: 1, revenue: 115.00, cost: 0.00, upvotes: 380, downvotes: 68, newUsers: 11},
    {date: '2025-10-26', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 58000, clicks: 380, conversions: 11, revenue: 1320.00, cost: 420.00, upvotes: 12, downvotes: 3, newUsers: 320},
    {date: '2025-10-27', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 46000, clicks: 290, conversions: 8, revenue: 920.00, cost: 340.00, upvotes: 7, downvotes: 2, newUsers: 240},
    {date: '2025-10-27', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 920, clicks: 19, conversions: 1, revenue: 105.00, cost: 0.00, upvotes: 245, downvotes: 48, newUsers: 16},
    {date: '2025-10-28', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 33000, clicks: 220, conversions: 6, revenue: 660.00, cost: 260.00, upvotes: 4, downvotes: 1, newUsers: 180},
    {date: '2025-10-28', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1050, clicks: 21, conversions: 1, revenue: 95.00, cost: 0.00, upvotes: 265, downvotes: 58, newUsers: 14},
    {date: '2025-10-29', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 62000, clicks: 410, conversions: 12, revenue: 1440.00, cost: 480.00, upvotes: 18, downvotes: 4, newUsers: 350},
    {date: '2025-10-29', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 1250, clicks: 28, conversions: 2, revenue: 230.00, cost: 0.00, upvotes: 415, downvotes: 78, newUsers: 23},
    {date: '2025-10-30', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 55000, clicks: 340, conversions: 10, revenue: 1150.00, cost: 390.00, upvotes: 11, downvotes: 2, newUsers: 290},
    {date: '2025-10-30', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1020, clicks: 20, conversions: 1, revenue: 95.00, cost: 0.00, upvotes: 258, downvotes: 52, newUsers: 15},
    {date: '2025-10-31', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 40000, clicks: 260, conversions: 7, revenue: 805.00, cost: 310.00, upvotes: 6, downvotes: 1, newUsers: 220},
    {date: '2025-10-31', campaignType: 'Organic Post', subreddit: 'r/travelgear', impressions: 1450, clicks: 33, conversions: 2, revenue: 220.00, cost: 0.00, upvotes: 492, downvotes: 88, newUsers: 28},
    
    // Week 2 (Nov 1-7) - Primary view week
    {date: '2025-11-01', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1200, clicks: 25, conversions: 1, revenue: 120.00, cost: 0.00, upvotes: 295, downvotes: 58, newUsers: 20, comments: 18, brandMentions: 12},
    {date: '2025-11-01', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 55000, clicks: 340, conversions: 10, revenue: 1200.00, cost: 410.00, upvotes: 10, downvotes: 1, newUsers: 290},
    {date: '2025-11-02', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 850, clicks: 15, conversions: 1, revenue: 125.00, cost: 0.00, upvotes: 405, downvotes: 72, newUsers: 12},
    {date: '2025-11-02', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 62000, clicks: 395, conversions: 12, revenue: 1440.00, cost: 450.00, upvotes: 15, downvotes: 3, newUsers: 340},
    {date: '2025-11-03', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 48000, clicks: 310, conversions: 9, revenue: 1035.00, cost: 365.00, upvotes: 8, downvotes: 2, newUsers: 260},
    {date: '2025-11-03', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 950, clicks: 20, conversions: 1, revenue: 110.00, cost: 0.00, upvotes: 248, downvotes: 62, newUsers: 18},
    {date: '2025-11-04', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 35000, clicks: 230, conversions: 7, revenue: 805.00, cost: 280.00, upvotes: 5, downvotes: 1, newUsers: 190},
    {date: '2025-11-04', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1100, clicks: 22, conversions: 1, revenue: 100.00, cost: 0.00, upvotes: 272, downvotes: 68, newUsers: 15},
    {date: '2025-11-05', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 65000, clicks: 445, conversions: 14, revenue: 1680.00, cost: 505.00, upvotes: 20, downvotes: 4, newUsers: 380},
    {date: '2025-11-05', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 1300, clicks: 30, conversions: 2, revenue: 240.00, cost: 0.00, upvotes: 432, downvotes: 85, newUsers: 25},
    {date: '2025-11-06', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 58000, clicks: 365, conversions: 11, revenue: 1320.00, cost: 420.00, upvotes: 12, downvotes: 2, newUsers: 310},
    {date: '2025-11-06', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1050, clicks: 21, conversions: 1, revenue: 100.00, cost: 0.00, upvotes: 264, downvotes: 62, newUsers: 16},
    {date: '2025-11-07', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 42000, clicks: 275, conversions: 8, revenue: 920.00, cost: 320.00, upvotes: 7, downvotes: 1, newUsers: 230},
    {date: '2025-11-07', campaignType: 'Organic Post', subreddit: 'r/travelgear', impressions: 1500, clicks: 35, conversions: 2, revenue: 230.00, cost: 0.00, upvotes: 510, downvotes: 92, newUsers: 30},
    
    // Week 3 (Nov 8-14) - For future comparison
    {date: '2025-11-08', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 70000, clicks: 475, conversions: 15, revenue: 1800.00, cost: 540.00, upvotes: 25, downvotes: 5, newUsers: 410},
    {date: '2025-11-08', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 1250, clicks: 28, conversions: 2, revenue: 225.00, cost: 0.00, upvotes: 416, downvotes: 82, newUsers: 22},
    {date: '2025-11-09', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 53000, clicks: 330, conversions: 10, revenue: 1150.00, cost: 390.00, upvotes: 10, downvotes: 3, newUsers: 280},
    {date: '2025-11-09', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 900, clicks: 18, conversions: 1, revenue: 100.00, cost: 0.00, upvotes: 229, downvotes: 54, newUsers: 14},
    {date: '2025-11-10', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 38000, clicks: 245, conversions: 7, revenue: 805.00, cost: 295.00, upvotes: 6, downvotes: 1, newUsers: 200},
    {date: '2025-11-10', campaignType: 'Organic Post', subreddit: 'r/travelgear', impressions: 1400, clicks: 32, conversions: 2, revenue: 240.00, cost: 0.00, upvotes: 467, downvotes: 88, newUsers: 28},
    {date: '2025-11-11', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 68000, clicks: 460, conversions: 13, revenue: 1560.00, cost: 525.00, upvotes: 23, downvotes: 4, newUsers: 390},
    {date: '2025-11-11', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 1150, clicks: 26, conversions: 2, revenue: 250.00, cost: 0.00, upvotes: 382, downvotes: 76, newUsers: 20},
    {date: '2025-11-12', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 45000, clicks: 295, conversions: 8, revenue: 920.00, cost: 340.00, upvotes: 9, downvotes: 2, newUsers: 250},
    {date: '2025-11-12', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 1000, clicks: 20, conversions: 1, revenue: 125.00, cost: 0.00, upvotes: 255, downvotes: 58, newUsers: 15},
    {date: '2025-11-13', campaignType: 'Paid Ads', subreddit: 'r/comfyfeet', impressions: 33000, clicks: 215, conversions: 6, revenue: 690.00, cost: 270.00, upvotes: 4, downvotes: 1, newUsers: 175},
    {date: '2025-11-13', campaignType: 'Organic Post', subreddit: 'r/travelgear', impressions: 1600, clicks: 38, conversions: 2, revenue: 240.00, cost: 0.00, upvotes: 552, downvotes: 104, newUsers: 32},
    {date: '2025-11-14', campaignType: 'Paid Ads', subreddit: 'r/shoes', impressions: 72000, clicks: 495, conversions: 16, revenue: 1920.00, cost: 565.00, upvotes: 28, downvotes: 6, newUsers: 425},
    {date: '2025-11-14', campaignType: 'Organic Post', subreddit: 'r/comfyfeet', impressions: 1200, clicks: 27, conversions: 2, revenue: 240.00, cost: 0.00, upvotes: 399, downvotes: 79, newUsers: 21},
    {date: '2025-11-15', campaignType: 'Paid Ads', subreddit: 'r/travelgear', impressions: 50000, clicks: 315, conversions: 9, revenue: 1035.00, cost: 375.00, upvotes: 11, downvotes: 3, newUsers: 270},
    {date: '2025-11-15', campaignType: 'Organic Post', subreddit: 'r/shoes', impressions: 800, clicks: 16, conversions: 1, revenue: 110.00, cost: 0.00, upvotes: 212, downvotes: 52, newUsers: 13}
];

let filteredData = [...rawData];
let charts = {};

// Get date ranges for comparisons
function getDateRanges() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    // Calculate date range length
    const rangeDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    // Week-over-Week comparison (previous 7 days)
    const wowStart = new Date(startDate);
    wowStart.setDate(wowStart.getDate() - 7);
    const wowEnd = new Date(endDate);
    wowEnd.setDate(wowEnd.getDate() - 7);
    
    // Month-over-Month comparison (previous 30 days)
    const momStart = new Date(startDate);
    momStart.setDate(momStart.getDate() - 30);
    const momEnd = new Date(endDate);
    momEnd.setDate(momEnd.getDate() - 30);
    
    return {
        current: { start: startDate, end: endDate },
        wow: { start: wowStart, end: wowEnd },
        mom: { start: momStart, end: momEnd }
    };
}

// Filter data by date range
function filterDataByDateRange(data, startDate, endDate) {
    return data.filter(row => {
        const rowDate = new Date(row.date);
        return rowDate >= startDate && rowDate <= endDate;
    });
}

// Calculate KPIs with comparison
function calculateKPIs(data, filter = null) {
    let subset = filter ? data.filter(filter) : data;
    
    const revenue = subset.reduce((sum, row) => sum + row.revenue, 0);
    const cost = subset.reduce((sum, row) => sum + row.cost, 0);
    const conversions = subset.reduce((sum, row) => sum + row.conversions, 0);
    const clicks = subset.reduce((sum, row) => sum + row.clicks, 0);
    const impressions = subset.reduce((sum, row) => sum + row.impressions, 0);
    const upvotes = subset.reduce((sum, row) => sum + row.upvotes, 0);
    const downvotes = subset.reduce((sum, row) => sum + row.downvotes, 0);
    const newUsers = subset.reduce((sum, row) => sum + row.newUsers, 0);
    
    return {
        revenue: revenue,
        cost: cost,
        conversions: conversions,
        clicks: clicks,
        impressions: impressions,
        roas: cost > 0 ? revenue / cost : 0,
        cpa: conversions > 0 ? cost / conversions : 0,
        aov: conversions > 0 ? revenue / conversions : 0,
        ctr: impressions > 0 ? (clicks / impressions) * 100 : 0,
        cvr: clicks > 0 ? (conversions / clicks) * 100 : 0,
        cpc: clicks > 0 ? cost / clicks : 0,
        ecpm: impressions > 0 ? (cost / impressions) * 1000 : 0,
        upvoteRate: (upvotes + downvotes) > 0 ? (upvotes / (upvotes + downvotes)) * 100 : 0,
        newUserRate: clicks > 0 ? (newUsers / clicks) * 100 : 0
    };
}

// Calculate percentage change
function calculateChange(current, previous) {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
}

// Update change badge
function updateChangeBadge(elementId, change, inverse = false) {
    const badge = document.getElementById(elementId);
    if (!badge) return;
    
    const absChange = Math.abs(change);
    const isPositive = inverse ? change < 0 : change > 0;
    const isNegative = inverse ? change > 0 : change < 0;
    
    badge.className = 'change-badge';
    if (isPositive) {
        badge.classList.add('positive');
        badge.innerHTML = `<i class="fas fa-arrow-up"></i> +${absChange.toFixed(1)}% WoW`;
    } else if (isNegative) {
        badge.classList.add('negative');
        badge.innerHTML = `<i class="fas fa-arrow-down"></i> -${absChange.toFixed(1)}% WoW`;
    } else {
        badge.classList.add('neutral');
        badge.innerHTML = `<i class="fas fa-minus"></i> ${absChange.toFixed(1)}% WoW`;
    }
}

// Format functions
function formatCurrency(value) {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function formatNumber(value) {
    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatPercent(value) {
    return value.toFixed(2) + '%';
}

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    updateDashboard();
}

// Quick Filter
function setQuickFilter(type) {
    const endDate = new Date('2025-11-15');
    let startDate = new Date('2025-11-01');
    
    if (type === 'week') {
        startDate = new Date('2025-11-08');
    } else if (type === 'month') {
        startDate = new Date('2025-10-16');
    }
    
    document.getElementById('startDate').value = startDate.toISOString().split('T')[0];
    document.getElementById('endDate').value = endDate.toISOString().split('T')[0];
    
    // Update active state
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    updateDateRange();
}

// Update date range
function updateDateRange() {
    const ranges = getDateRanges();
    filteredData = filterDataByDateRange(rawData, ranges.current.start, ranges.current.end);
    updateDashboard();
}

// Update Executive Summary
function updateExecutiveSummary() {
    const ranges = getDateRanges();
    
    // Current period data
    const currentData = filterDataByDateRange(rawData, ranges.current.start, ranges.current.end);
    const wowData = filterDataByDateRange(rawData, ranges.wow.start, ranges.wow.end);
    
    const allKPIs = calculateKPIs(currentData);
    const paidKPIs = calculateKPIs(currentData, row => row.campaignType === 'Paid Ads');
    const organicKPIs = calculateKPIs(currentData, row => row.campaignType === 'Organic Post');
    
    const allKPIsWoW = calculateKPIs(wowData);
    const paidKPIsWoW = calculateKPIs(wowData, row => row.campaignType === 'Paid Ads');
    const organicKPIsWoW = calculateKPIs(wowData, row => row.campaignType === 'Organic Post');
    
    // Update values and changes
    document.getElementById('summary-revenue').textContent = formatCurrency(paidKPIs.revenue);
    updateChangeBadge('summary-revenue-change', calculateChange(paidKPIs.revenue, paidKPIsWoW.revenue));
    
    document.getElementById('summary-roas').textContent = paidKPIs.roas.toFixed(1);
    updateChangeBadge('summary-roas-change', calculateChange(paidKPIs.roas, paidKPIsWoW.roas));
    
    document.getElementById('summary-cpa').textContent = formatCurrency(paidKPIs.cpa);
    updateChangeBadge('summary-cpa-change', calculateChange(paidKPIs.cpa, paidKPIsWoW.cpa), true);
    
    document.getElementById('summary-aov').textContent = formatCurrency(allKPIs.aov);
    updateChangeBadge('summary-aov-change', calculateChange(allKPIs.aov, allKPIsWoW.aov));
    
    document.getElementById('summary-cost').textContent = formatCurrency(paidKPIs.cost);
    updateChangeBadge('summary-cost-change', calculateChange(paidKPIs.cost, paidKPIsWoW.cost));
    
    document.getElementById('summary-impressions').textContent = formatNumber(allKPIs.impressions);
    updateChangeBadge('summary-impressions-change', calculateChange(allKPIs.impressions, allKPIsWoW.impressions));
    
    document.getElementById('summary-clicks').textContent = formatNumber(allKPIs.clicks);
    updateChangeBadge('summary-clicks-change', calculateChange(allKPIs.clicks, allKPIsWoW.clicks));
    
    document.getElementById('summary-upvote-rate').textContent = formatPercent(organicKPIs.upvoteRate);
    updateChangeBadge('summary-upvote-change', calculateChange(organicKPIs.upvoteRate, organicKPIsWoW.upvoteRate));
    
    document.getElementById('summary-ctr').textContent = formatPercent(allKPIs.ctr);
    updateChangeBadge('summary-ctr-change', calculateChange(allKPIs.ctr, allKPIsWoW.ctr));
    
    document.getElementById('summary-conversions').textContent = formatNumber(allKPIs.conversions);
    updateChangeBadge('summary-conversions-change', calculateChange(allKPIs.conversions, allKPIsWoW.conversions));
    
    // Update progress bar
    const revenueProgress = document.getElementById('summary-revenue-progress');
    if (revenueProgress) {
        const maxRevenue = 40000; // Target
        const progressPercent = Math.min((paidKPIs.revenue / maxRevenue) * 100, 100);
        revenueProgress.style.width = progressPercent + '%';
    }
    
    updateClicksTrendChart();
    updateSubredditChart();
}

// Update Organic Growth page
function updateOrganicGrowth() {
    const ranges = getDateRanges();
    
    const currentData = filterDataByDateRange(rawData, ranges.current.start, ranges.current.end);
    const wowData = filterDataByDateRange(rawData, ranges.wow.start, ranges.wow.end);
    
    const organicData = currentData.filter(row => row.campaignType === 'Organic Post');
    const organicDataWoW = wowData.filter(row => row.campaignType === 'Organic Post');
    
    const kpis = calculateKPIs(organicData);
    const kpisWoW = calculateKPIs(organicDataWoW);
    
    document.getElementById('organic-upvote-rate').textContent = formatPercent(kpis.upvoteRate);
    updateChangeBadge('organic-upvote-change', calculateChange(kpis.upvoteRate, kpisWoW.upvoteRate));
    
    document.getElementById('organic-clicks').textContent = formatNumber(kpis.clicks);
    updateChangeBadge('organic-clicks-change', calculateChange(kpis.clicks, kpisWoW.clicks));
    
    document.getElementById('organic-conversions').textContent = formatNumber(kpis.conversions);
    updateChangeBadge('organic-conversions-change', calculateChange(kpis.conversions, kpisWoW.conversions));
    
    document.getElementById('organic-new-users').textContent = formatPercent(kpis.newUserRate);
    updateChangeBadge('organic-new-change', calculateChange(kpis.newUserRate, kpisWoW.newUserRate));
    
    updateOrganicClicksChart();
    updateOrganicEngagementTable();
    updateOrganicTable();
}

// Update Paid Ads page
function updatePaidAds() {
    const ranges = getDateRanges();
    
    const currentData = filterDataByDateRange(rawData, ranges.current.start, ranges.current.end);
    const wowData = filterDataByDateRange(rawData, ranges.wow.start, ranges.wow.end);
    
    const paidData = currentData.filter(row => row.campaignType === 'Paid Ads');
    const paidDataWoW = wowData.filter(row => row.campaignType === 'Paid Ads');
    
    const kpis = calculateKPIs(paidData);
    const kpisWoW = calculateKPIs(paidDataWoW);
    
    document.getElementById('paid-cost').textContent = formatCurrency(kpis.cost);
    updateChangeBadge('paid-cost-change', calculateChange(kpis.cost, kpisWoW.cost));
    
    document.getElementById('paid-impressions').textContent = formatNumber(kpis.impressions);
    updateChangeBadge('paid-impressions-change', calculateChange(kpis.impressions, kpisWoW.impressions));
    
    document.getElementById('paid-ecpm').textContent = formatCurrency(kpis.ecpm);
    updateChangeBadge('paid-ecpm-change', calculateChange(kpis.ecpm, kpisWoW.ecpm), true);
    
    document.getElementById('paid-ctr').textContent = formatPercent(kpis.ctr);
    updateChangeBadge('paid-ctr-change', calculateChange(kpis.ctr, kpisWoW.ctr));
    
    document.getElementById('paid-cpc').textContent = formatCurrency(kpis.cpc);
    updateChangeBadge('paid-cpc-change', calculateChange(kpis.cpc, kpisWoW.cpc), true);
    
    document.getElementById('paid-roas').textContent = kpis.roas.toFixed(1);
    updateChangeBadge('paid-roas-change', calculateChange(kpis.roas, kpisWoW.roas));
    
    document.getElementById('paid-cpa').textContent = formatCurrency(kpis.cpa);
    updateChangeBadge('paid-cpa-change', calculateChange(kpis.cpa, kpisWoW.cpa), true);
    
    document.getElementById('paid-cvr').textContent = formatPercent(kpis.cvr);
    updateChangeBadge('paid-cvr-change', calculateChange(kpis.cvr, kpisWoW.cvr));
    
    document.getElementById('paid-aov').textContent = formatCurrency(kpis.aov);
    updateChangeBadge('paid-aov-change', calculateChange(kpis.aov, kpisWoW.aov));
    
    document.getElementById('paid-new-users').textContent = formatPercent(kpis.newUserRate);
    updateChangeBadge('paid-new-change', calculateChange(kpis.newUserRate, kpisWoW.newUserRate));
    
    updatePaidEfficiencyChart();
    updatePaidTable();
}

// Chart: Clicks Trend
function updateClicksTrendChart() {
    const ctx = document.getElementById('summaryClicksChart');
    
    const dates = [...new Set(filteredData.map(row => row.date))].sort();
    const paidClicks = dates.map(date => {
        return filteredData.filter(row => row.date === date && row.campaignType === 'Paid Ads')
            .reduce((sum, row) => sum + row.clicks, 0);
    });
    const organicClicks = dates.map(date => {
        return filteredData.filter(row => row.date === date && row.campaignType === 'Organic Post')
            .reduce((sum, row) => sum + row.clicks, 0);
    });
    
    if (charts.summaryClicks) {
        charts.summaryClicks.destroy();
    }
    
    charts.summaryClicks = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => new Date(d).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})),
            datasets: [
                {
                    label: 'Paid Ads',
                    data: paidClicks,
                    borderColor: '#e4432f',
                    backgroundColor: 'rgba(228, 67, 47, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                },
                {
                    label: 'Organic Post',
                    data: organicClicks,
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 12, weight: 600 },
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

// Chart: Subreddit Performance
function updateSubredditChart() {
    const ctx = document.getElementById('summarySubredditChart');
    
    const subredditData = {};
    filteredData.forEach(row => {
        if (!subredditData[row.subreddit]) {
            subredditData[row.subreddit] = 0;
        }
        subredditData[row.subreddit] += row.clicks;
    });
    
    const subreddits = Object.keys(subredditData).sort((a, b) => subredditData[b] - subredditData[a]);
    const clicks = subreddits.map(s => subredditData[s]);
    
    if (charts.summarySubreddit) {
        charts.summarySubreddit.destroy();
    }
    
    charts.summarySubreddit = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: subreddits,
            datasets: [{
                label: 'Clicks',
                data: clicks,
                backgroundColor: '#e4432f'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

// Chart: Organic Clicks
function updateOrganicClicksChart() {
    const ctx = document.getElementById('organicClicksChart');
    const organicData = filteredData.filter(row => row.campaignType === 'Organic Post');
    
    const dates = [...new Set(organicData.map(row => row.date))].sort();
    const clicks = dates.map(date => {
        return organicData.filter(row => row.date === date)
            .reduce((sum, row) => sum + row.clicks, 0);
    });
    
    if (charts.organicClicks) {
        charts.organicClicks.destroy();
    }
    
    charts.organicClicks = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => new Date(d).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})),
            datasets: [{
                label: 'Organic Clicks',
                data: clicks,
                borderColor: '#e4432f',
                backgroundColor: 'rgba(228, 67, 47, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

// Table: Organic Engagement by Subreddit
function updateOrganicEngagementTable() {
    const organicData = filteredData.filter(row => row.campaignType === 'Organic Post');
    
    // Extended subreddit list with more realistic, diverse communities
    const extendedSubreddits = [
        'r/shoes', 'r/comfyfeet', 'r/travelgear', 'r/BuyItForLife', 
        'r/femalefashionadvice', 'r/malefashionadvice', 'r/running',
        'r/hiking', 'r/backpacking', 'r/frugalmalefashion'
    ];
    
    const subredditData = {};
    
    // Initialize all subreddits with base data
    extendedSubreddits.forEach(sub => {
        if (!subredditData[sub]) {
            subredditData[sub] = {
                impressions: 0,
                upvotes: 0,
                downvotes: 0,
                comments: 0,
                brandMentions: 0
            };
        }
    });
    
    // Add actual data from filtered results
    organicData.forEach(row => {
        if (!subredditData[row.subreddit]) {
            subredditData[row.subreddit] = {
                impressions: 0,
                upvotes: 0,
                downvotes: 0,
                comments: 0,
                brandMentions: 0
            };
        }
        subredditData[row.subreddit].impressions += row.impressions;
        subredditData[row.subreddit].upvotes += row.upvotes;
        subredditData[row.subreddit].downvotes += row.downvotes;
        // More conservative: 1-2% of impressions become comments
        subredditData[row.subreddit].comments += Math.floor(row.impressions * 0.015);
        // Very conservative: 0.3-0.8% of impressions are brand mentions
        subredditData[row.subreddit].brandMentions += Math.floor(row.impressions * 0.005);
    });
    
    // Add estimated data for subreddits not in current filtered data
    extendedSubreddits.forEach(sub => {
        if (subredditData[sub].impressions === 0) {
            // Generate realistic low-volume data for extended subreddits
            const baseImpressions = Math.floor(Math.random() * 400) + 200;
            subredditData[sub].impressions = baseImpressions;
            subredditData[sub].upvotes = Math.floor(baseImpressions * 0.15 * (0.7 + Math.random() * 0.25));
            subredditData[sub].downvotes = Math.floor(baseImpressions * 0.15 * (0.15 + Math.random() * 0.20));
            subredditData[sub].comments = Math.floor(baseImpressions * 0.012);
            subredditData[sub].brandMentions = Math.floor(baseImpressions * 0.004);
        }
    });
    
    const tbody = document.querySelector('#organicEngagementTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Show top 10 by impressions
    Object.keys(subredditData).sort((a, b) => {
        return subredditData[b].impressions - subredditData[a].impressions;
    }).slice(0, 10).forEach(subreddit => {
        const data = subredditData[subreddit];
        const sentimentRatio = data.upvotes / (data.upvotes + data.downvotes);
        
        let sentimentBadge = 'badge-good';
        let sentimentText = 'Positive';
        if (sentimentRatio >= 0.85) {
            sentimentBadge = 'badge-excellent';
            sentimentText = 'Very Positive';
        } else if (sentimentRatio < 0.70) {
            sentimentBadge = 'badge-warning';
            sentimentText = 'Mixed';
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${subreddit}</strong></td>
            <td>${formatNumber(data.brandMentions)}</td>
            <td>${formatNumber(data.impressions)}</td>
            <td>${formatNumber(data.comments)}</td>
            <td><span style="color: var(--success-green); font-weight: 600;">${formatNumber(data.upvotes)}</span></td>
            <td><span style="color: #dc3545; font-weight: 600;">${formatNumber(data.downvotes)}</span></td>
            <td><span class="table-badge ${sentimentBadge}">${sentimentText}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Table: Organic Performance
function updateOrganicTable() {
    const organicData = filteredData.filter(row => row.campaignType === 'Organic Post');
    
    const subredditData = {};
    organicData.forEach(row => {
        if (!subredditData[row.subreddit]) {
            subredditData[row.subreddit] = {
                upvotes: 0,
                downvotes: 0,
                clicks: 0,
                conversions: 0
            };
        }
        subredditData[row.subreddit].upvotes += row.upvotes;
        subredditData[row.subreddit].downvotes += row.downvotes;
        subredditData[row.subreddit].clicks += row.clicks;
        subredditData[row.subreddit].conversions += row.conversions;
    });
    
    const tbody = document.querySelector('#organicTable tbody');
    tbody.innerHTML = '';
    
    Object.keys(subredditData).sort((a, b) => {
        const aRate = subredditData[a].upvotes / (subredditData[a].upvotes + subredditData[a].downvotes);
        const bRate = subredditData[b].upvotes / (subredditData[b].upvotes + subredditData[b].downvotes);
        return bRate - aRate;
    }).forEach(subreddit => {
        const data = subredditData[subreddit];
        const upvoteRate = (data.upvotes / (data.upvotes + data.downvotes)) * 100;
        
        let qualityBadge = 'badge-good';
        let qualityText = 'Good';
        if (upvoteRate >= 95) {
            qualityBadge = 'badge-excellent';
            qualityText = 'Excellent';
        } else if (upvoteRate < 90) {
            qualityBadge = 'badge-warning';
            qualityText = 'Fair';
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${subreddit}</strong></td>
            <td><span style="color: var(--success-green); font-weight: 600;">${upvoteRate.toFixed(1)}%</span></td>
            <td>${formatNumber(data.clicks)}</td>
            <td>${formatNumber(data.conversions)}</td>
            <td><span class="table-badge ${qualityBadge}">${qualityText}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Chart: Paid Efficiency
function updatePaidEfficiencyChart() {
    const ctx = document.getElementById('paidEfficiencyChart');
    const paidData = filteredData.filter(row => row.campaignType === 'Paid Ads');
    
    const dates = [...new Set(paidData.map(row => row.date))].sort();
    const roasData = dates.map(date => {
        const dayData = paidData.filter(row => row.date === date);
        const revenue = dayData.reduce((sum, row) => sum + row.revenue, 0);
        const cost = dayData.reduce((sum, row) => sum + row.cost, 0);
        return cost > 0 ? revenue / cost : 0;
    });
    const cpaData = dates.map(date => {
        const dayData = paidData.filter(row => row.date === date);
        const cost = dayData.reduce((sum, row) => sum + row.cost, 0);
        const conversions = dayData.reduce((sum, row) => sum + row.conversions, 0);
        return conversions > 0 ? cost / conversions : 0;
    });
    
    if (charts.paidEfficiency) {
        charts.paidEfficiency.destroy();
    }
    
    charts.paidEfficiency = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => new Date(d).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})),
            datasets: [
                {
                    label: 'ROAS',
                    data: roasData,
                    borderColor: '#e4432f',
                    backgroundColor: 'rgba(228, 67, 47, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y',
                    borderWidth: 3
                },
                {
                    label: 'CPA ($)',
                    data: cpaData,
                    borderColor: '#666666',
                    backgroundColor: 'rgba(102, 102, 102, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1',
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 12, weight: 600 },
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'ROAS',
                        font: { size: 12, weight: 600 }
                    },
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CPA ($)',
                        font: { size: 12, weight: 600 }
                    },
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });
}

// Table: Paid Performance
function updatePaidTable() {
    const paidData = filteredData.filter(row => row.campaignType === 'Paid Ads');
    
    const subredditData = {};
    paidData.forEach(row => {
        if (!subredditData[row.subreddit]) {
            subredditData[row.subreddit] = {
                revenue: 0,
                cost: 0,
                conversions: 0,
                impressions: 0
            };
        }
        subredditData[row.subreddit].revenue += row.revenue;
        subredditData[row.subreddit].cost += row.cost;
        subredditData[row.subreddit].conversions += row.conversions;
        subredditData[row.subreddit].impressions += row.impressions;
    });
    
    const tbody = document.querySelector('#paidTable tbody');
    tbody.innerHTML = '';
    
    Object.keys(subredditData).sort((a, b) => {
        const aRoas = subredditData[a].revenue / subredditData[a].cost;
        const bRoas = subredditData[b].revenue / subredditData[b].cost;
        return bRoas - aRoas;
    }).forEach(subreddit => {
        const data = subredditData[subreddit];
        const roas = data.cost > 0 ? data.revenue / data.cost : 0;
        const cpa = data.conversions > 0 ? data.cost / data.conversions : 0;
        
        let performanceBadge = 'badge-good';
        let performanceText = 'Good';
        if (roas >= 7.0) {
            performanceBadge = 'badge-excellent';
            performanceText = 'Excellent';
        } else if (roas < 4.0) {
            performanceBadge = 'badge-warning';
            performanceText = 'Review';
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${subreddit}</strong></td>
            <td><span style="color: ${roas > 5 ? 'var(--success-green)' : 'inherit'}; font-weight: 600;">${roas.toFixed(1)}</span></td>
            <td>${formatCurrency(cpa)}</td>
            <td>${formatNumber(data.impressions)}</td>
            <td>${formatCurrency(data.cost)}</td>
            <td><span class="table-badge ${performanceBadge}">${performanceText}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Update entire dashboard
function updateDashboard() {
    updateExecutiveSummary();
    updateOrganicGrowth();
    updatePaidAds();
}

// Tab switching function
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Activate the corresponding tab button
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        const tabText = tab.textContent.toLowerCase();
        if ((tabId === 'summary' && tabText.includes('executive')) ||
            (tabId === 'organic' && tabText.includes('organic')) ||
            (tabId === 'paid' && tabText.includes('paid'))) {
            tab.classList.add('active');
        }
    });
}

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
});

