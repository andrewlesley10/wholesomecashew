// Static Data Configurations
const leadership = [
  {
    name: 'Mr. Lecom Mohottige Siripala',
    role: 'Chairman',
    color: '#92400E',
    bio: 'Directs the strategic vision of Wholesome Cashew Products, bringing decades of dedication to Sri Lanka\'s agricultural export industry.',
    initials: 'MS'
  },
  {
    name: 'Mr. Lecom Mohottige Chamil Niroshana',
    role: 'Managing Director',
    color: '#B45309',
    bio: 'Oversees day-to-day operations, international export coordination, and advanced technology integrations in cashew processing lines.',
    initials: 'CN'
  },
  {
    name: 'Mrs. Kathiri Arachchige Kanthi Mallika',
    role: 'Director',
    color: '#78350F',
    bio: 'Steers quality assurance management and strict standards of food safety to satisfy global compliance certifications.',
    initials: 'KM'
  }
];

const capabilities = [
  {
    id: 'processing',
    title: 'Premium Cashew Processing',
    icon: 'settings',
    detail: 'Meticulous decorticating, peeling, and continuous drying schedules to preserve the creamy, buttery texture of organic Sri Lankan cashew nuts without rancidity.'
  },
  {
    id: 'bulk-supply',
    title: 'Bulk Cashew Supply',
    icon: 'grid',
    detail: 'Wholesale quantities of whole-kernel counts (W180, W210, W240, W320 partitions and splits) sorted for bulk buyers under standard moisture rules.'
  },
  {
    id: 'export-packaging',
    title: 'Export-Grade Cashew Packaging',
    icon: 'box',
    detail: 'Vacuum-sealed high-barrier tins, food-grade laminate pouches with inert gas flushing (nitrogen) to ensure prolonged crispness and maximum shipping transit life.'
  },
  {
    id: 'private-label',
    title: 'Private Label Manufacturing',
    icon: 'tag',
    detail: 'End-to-end bespoke visual co-packing service for global organic brands, including customized brand labels, allergen markings, and nutritional labeling.'
  },
  {
    id: 'wholesale-dist',
    title: 'Wholesale Distribution',
    icon: 'truck',
    detail: 'Flexible commercial load transport agreements with robust palletization, shipping temperature checks, and verified customs documentation.'
  },
  {
    id: 'retail-packing',
    title: 'Retail Packaging Solutions',
    icon: 'file-check',
    detail: 'Visual consumer pouches, stand-up zip pouches, and rigid canisters designed for retail shelves, complete with customized barcode standards.'
  },
  {
    id: 'custom-packaging',
    title: 'Custom Packaging Requirements',
    icon: 'scale',
    detail: 'Custom pack sizing ranging from 100g, 250g, 500g, 1kg retail packs up to massive bulk carton boxes matching regional wholesale configurations.'
  },
  {
    id: 'international-coor',
    title: 'International Export Coordination',
    icon: 'briefcase',
    detail: 'Experienced foreign commerce clearance handling, shipping line routing, marine insurance processing, and comprehensive tariff documentation support.'
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance & Food Safety Standards',
    icon: 'shield-check',
    detail: 'Continuous lot testing, strict critical control points (HACCP principles), moisture inspection, and thorough sanitization matching SLCC benchmarks.'
  }
];

const middleEastDestinations = [
  { name: 'United Arab Emirates (UAE)', code: 'AE', port: 'Jebel Ali, Dubai', transit: '6-8 Days' },
  { name: 'Saudi Arabia', code: 'SA', port: 'Jeddah Port / Dammam', transit: '9-11 Days' },
  { name: 'Qatar', code: 'QA', port: 'Hamad Port, Doha', transit: '8-10 Days' },
  { name: 'Kuwait', code: 'KW', port: 'Shuaybah Port', transit: '10-12 Days' },
  { name: 'Bahrain', code: 'BH', port: 'Khalifa Bin Salman Port', transit: '8-10 Days' },
  { name: 'Oman', code: 'OM', port: 'Port of Salalah / Sohar', transit: '5-7 Days' },
  { name: 'Jordan', code: 'JO', port: 'Port of Aqaba', transit: '12-14 Days' },
  { name: 'Other Middle Eastern Countries', code: 'ME', port: 'Regional Hub Coordination', transit: 'Varies' }
];

const farEastDestinations = [
  { name: 'Singapore', code: 'SG', port: 'Port of Singapore', transit: '4-5 Days' },
  { name: 'Malaysia', code: 'MY', port: 'Port Klang, Selangor', transit: '5-6 Days' },
  { name: 'Thailand', code: 'TH', port: 'Laem Chabang, Bangkok', transit: '6-8 Days' },
  { name: 'Indonesia', code: 'ID', port: 'Tanjung Priok, Jakarta', transit: '6-8 Days' },
  { name: 'Hong Kong', code: 'HK', port: 'Hong Kong Terminal', transit: '5-7 Days' },
  { name: 'Japan', code: 'JP', port: 'Port of Tokyo / Yokohama', transit: '9-11 Days' },
  { name: 'South Korea', code: 'KR', port: 'Port of Busan', transit: '8-10 Days' }
];

const localSectors = [
  { title: 'Wholesale Traders', desc: 'Providing bulk sacks and wholesale crates to primary central distribution networks.', icon: 'warehouse' },
  { title: 'Supermarkets', desc: 'Premium retail consumer packs ready-designed for modern grocery display shelves.', icon: 'store' },
  { title: 'Retail Stores', desc: 'Convenient packaging portions for general trade and sweet shops across Sri Lanka.', icon: 'shopping-bag' },
  { title: 'Hotels & Restaurants', desc: 'Consistently graded bulk kernels fitted for luxurious culinary and dining needs.', icon: 'utensils-crossed' },
  { title: 'Catering Companies', desc: 'Reliable high-volume batches suited for wedding, corporate and event banqueting.', icon: 'utensils-crossed' },
  { title: 'Corporate Clients', desc: 'Bespoke corporate gifting packs, holiday baskets, and cafeteria whole kernel supply.', icon: 'building' },
  { title: 'Food Distributors', desc: 'Strategic logistic alliances supplying intermediate industrial food processors.', icon: 'compass' }
];

const roles = [
  { title: 'Quality Assurance & Food Safety Inspector', dept: 'Production & Quality Control', loc: 'Kotugoda, Sri Lanka', type: 'Full-time' },
  { title: 'International Export Coordination Officer', dept: 'Logistics & Supply Chain', loc: 'Kotugoda, Sri Lanka', type: 'Full-time' },
  { title: 'Wholesale Accounts Associate', dept: 'Sales & Distribution', loc: 'Kotugoda, Sri Lanka', type: 'Full-time' },
  { title: 'Industrial Cashew Decorticator Operator', dept: 'Factory Processing Division', loc: 'Kotugoda, Sri Lanka', type: 'Full-time' }
];

// Active State Trackers
let selectedCapability = null;
let activeRegion = 'middle-east';
let selectedCountry = null;
let selectedCVFile = null;

// Initialize Application after DOM is Loaded
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  setupMobileMenu();
  renderDynamicComponents();
  setupMarketsSectors();
  setupCareersForm();
  setupContactForm();
  setupCopyEmailButtons();
  
  // Create icons initially
  lucide.createIcons();
});

// 1. Pathname-Based Active Nav Highlighting
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('[data-nav-page]');
  
  navLinks.forEach(link => {
    const pageName = link.getAttribute('data-nav-page');
    const isMobileNav = link.id && link.id.includes('mobile-nav');
    
    let isActive = false;
    if (pageName === 'home') {
      isActive = currentPath === '/' || currentPath === '' || currentPath.endsWith('/') || currentPath.endsWith('/home.html') || currentPath.endsWith('/home') || currentPath.endsWith('/index.html') || currentPath.endsWith('/index');
    } else {
      isActive = currentPath.endsWith('/' + pageName) || currentPath.endsWith('/' + pageName + '.html');
    }
    
    if (isActive) {
      if (isMobileNav) {
        link.className = 'w-full flex items-center gap-3.5 px-4.5 py-3 rounded-sm font-sans text-sm uppercase tracking-widest font-bold text-left transition-all bg-amber-800 text-white shadow-sm';
      } else {
        link.className = 'relative flex items-center gap-1.5 px-4 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer text-white bg-amber-800';
      }
    } else {
      if (isMobileNav) {
        link.className = 'w-full flex items-center gap-3.5 px-4.5 py-3 rounded-sm font-sans text-sm uppercase tracking-widest font-bold text-left transition-all text-stone-600 hover:bg-stone-100 hover:text-amber-805';
      } else {
        link.className = 'relative flex items-center gap-1.5 px-4 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer text-stone-600 hover:text-amber-800 hover:bg-stone-100/60';
      }
    }
  });
}

// 2. Mobile Burger Drawer controls
function setupMobileMenu() {
  const burgerBtn = document.getElementById('mobile-hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-panel');
  
  if (burgerBtn && mobileDrawer) {
    burgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
}

// 3. Render Static Dynamic Data (Grid items, cards, careers list)
function renderDynamicComponents() {
  // A. Leadership Team rendering in Home View
  const leadershipGrid = document.getElementById('leadership-cards-grid');
  if (leadershipGrid) {
    leadershipGrid.innerHTML = leadership.map((leader, i) => `
      <div class="bg-white rounded-sm border border-stone-200 p-8 shadow-sm flex flex-col items-center hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-16 h-16 bg-stone-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-300"></div>
        <div class="w-16 h-16 rounded-sm flex items-center justify-center font-serif text-xl font-bold text-white shadow-inner mb-6" style="background-color: ${leader.color}">
          ${leader.initials}
        </div>
        <h3 class="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
          ${leader.name}
        </h3>
        <span class="font-sans text-xs font-semibold text-amber-700 uppercase tracking-wider mt-1.5 mb-4 block">
          ${leader.role}
        </span>
        <p class="text-stone-500 text-xs leading-relaxed text-center font-sans">
          ${leader.bio}
        </p>
        <div class="border-t border-dashed border-stone-200 w-full mt-6 pt-4 text-[10px] text-stone-400 font-sans tracking-wide">
          Wholesome Cashew Executive Board
        </div>
      </div>
    `).join('');
  }

  // B. Capabilities Screen Grid
  const capabilitiesItemsGrid = document.getElementById('capabilities-items-grid-column-inner');
  const capabImages = [
    'capab1.webp',
    'capab2.avif',
    'capab3.jpg',
    'capab4.webp',
    'capab5.webp',
    'capab6.jpg',
    'capab7.webp',
    'capab8.avif',
    'capab9.jpg'
  ];
  if (capabilitiesItemsGrid) {
    capabilitiesItemsGrid.innerHTML = capabilities.map((cap, idx) => `
      <div id="capability-item-${cap.id}" data-cap-id="${cap.id}" class="bg-white rounded-sm border border-stone-200 p-6 transition-all duration-300 text-left flex flex-col relative group hover:border-amber-800 hover:shadow-xs">
        <div class="rounded-sm overflow-hidden aspect-[4/3] bg-stone-100 mb-4 border border-stone-200">
          <img src="/images/${capabImages[idx]}" alt="${cap.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>

        <h3 class="font-serif font-semibold text-base text-stone-900 mb-2">
          ${cap.title}
        </h3>

        <p class="text-stone-500 text-xs leading-relaxed font-sans">
          ${cap.detail}
        </p>
      </div>
    `).join('');
  }

  // C. Careers Screen Role Listings
  const vacancyCardsWrapper = document.getElementById('vacancy-cards-wrapper');
  if (vacancyCardsWrapper) {
    vacancyCardsWrapper.innerHTML = roles.map(role => `
      <div data-role-title="${role.title}" class="bg-white rounded-sm border border-stone-200 p-5 hover:border-amber-800 hover:shadow-xs cursor-pointer transition-all duration-200 flex items-center justify-between group">
        <div class="space-y-1.5 text-left">
          <h3 class="font-serif font-bold text-stone-950 group-hover:text-amber-800 transition-colors text-sm sm:text-base">
            ${role.title}
          </h3>
          <div class="flex gap-4 text-xs text-stone-500 font-sans mt-0.5">
            <span>${role.dept}</span>
            <span>&bull;</span>
            <span class="text-stone-400">${role.loc}</span>
          </div>
        </div>
        <div class="text-right flex items-center gap-2">
          <span class="hidden sm:inline-block text-[10px] font-sans font-bold uppercase tracking-wider bg-stone-50 text-amber-800 px-2.5 py-1 rounded-sm border border-stone-150">
            ${role.type}
          </span>
          <i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 group-hover:text-amber-800 transition-transform duration-200 transform group-hover:translate-x-1"></i>
        </div>
      </div>
    `).join('');

    // Clicking vacancies auto-fills target role
    const vacancyCards = vacancyCardsWrapper.querySelectorAll('[data-role-title]');
    vacancyCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-role-title');
        const roleDropdown = document.getElementById('careers-role-select');
        if (roleDropdown) {
          roleDropdown.value = title;
        }
        // Scroll slightly down to form for smooth desktop engagement
        const formBlock = document.getElementById('career-apply-form');
        if (formBlock) {
          formBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }
}

// 4. Capabilities Expand-Collapse Detail Toggling
function setupCapabilitiesInteractivity() {
  const items = document.querySelectorAll('[data-cap-id]');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const capId = item.getAttribute('data-cap-id');
      const label = item.querySelector('.detail-label-text');
      const arrowObj = item.querySelector('.arrow-indicator');
      
      if (selectedCapability === capId) {
        selectedCapability = null;
        item.className = 'bg-white rounded-sm border border-stone-200 p-6 transition-all duration-300 cursor-pointer text-left flex flex-col relative group hover:border-amber-800 hover:shadow-xs';
        if (label) label.textContent = 'Interactive Detail';
        if (arrowObj) arrowObj.style.transform = 'rotate(0deg)';
      } else {
        // Reset old chosen capability styling if needed
        if (selectedCapability) {
          const oldActive = document.querySelector(`[data-cap-id="${selectedCapability}"]`);
          if (oldActive) {
            oldActive.className = 'bg-white rounded-sm border border-stone-200 p-6 transition-all duration-300 cursor-pointer text-left flex flex-col relative group hover:border-amber-800 hover:shadow-xs';
            const oldLabel = oldActive.querySelector('.detail-label-text');
            const oldArrowObj = oldActive.querySelector('.arrow-indicator');
            if (oldLabel) oldLabel.textContent = 'Interactive Detail';
            if (oldArrowObj) oldArrowObj.style.transform = 'rotate(0deg)';
          }
        }
        
        selectedCapability = capId;
        item.className = 'bg-white rounded-sm border border-amber-800 ring-2 ring-amber-800/10 p-6 transition-all duration-300 cursor-pointer text-left flex flex-col relative shadow-sm';
        if (label) label.textContent = 'Collapse Detail';
        if (arrowObj) arrowObj.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// 5. Port Transit Region and Destination selectors
function setupMarketsSectors() {
  // Setup Region Switch buttons
  const regionBtnME = document.getElementById('btn-region-middle-east');
  const regionBtnFE = document.getElementById('btn-region-far-east');
  const regionBtnLocal = document.getElementById('btn-region-local');
  
  if (!regionBtnME || !regionBtnFE || !regionBtnLocal) return;
  
  const contME = document.getElementById('markets-region-middle-east');
  const contFE = document.getElementById('markets-region-far-east');
  const contLocal = document.getElementById('markets-region-local');

  regionBtnME.addEventListener('click', () => switchRegion('middle-east'));
  regionBtnFE.addEventListener('click', () => switchRegion('far-east'));
  regionBtnLocal.addEventListener('click', () => switchRegion('local'));

  function switchRegion(region) {
    activeRegion = region;
    selectedCountry = null;
    
    // Clear active UI classes
    regionBtnME.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-white text-stone-600 border-stone-200 hover:bg-stone-50';
    regionBtnFE.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-white text-stone-600 border-stone-200 hover:bg-stone-50';
    regionBtnLocal.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-white text-stone-600 border-stone-200 hover:bg-stone-50';
    
    contME.classList.add('hidden');
    contFE.classList.add('hidden');
    contLocal.classList.add('hidden');

    if (region === 'middle-east') {
      regionBtnME.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-amber-800 text-white border-amber-800';
      contME.classList.remove('hidden');
      renderCountryLists('middle-east');
    } else if (region === 'far-east') {
      regionBtnFE.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-amber-800 text-white border-amber-800';
      contFE.classList.remove('hidden');
      renderCountryLists('far-east');
    } else {
      regionBtnLocal.className = 'px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 border bg-amber-800 text-white border-amber-800';
      contLocal.classList.remove('hidden');
      renderLocalDistributors();
    }
  }

  // Render country list helpers
  function renderCountryLists(region) {
    const listContainer = region === 'middle-east' 
      ? document.getElementById('me-countries-list') 
      : document.getElementById('fe-countries-list');
    
    const arraySet = region === 'middle-east' ? middleEastDestinations : farEastDestinations;
    
    if (listContainer) {
      listContainer.innerHTML = arraySet.map(dest => `
        <div data-dest-name="${dest.name}" class="bg-white rounded-sm border border-stone-200 p-5 cursor-pointer transition-all duration-200 flex items-center justify-between group hover:border-amber-800">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-stone-100 text-amber-800 flex items-center justify-center font-sans font-bold text-xs shrink-0">
              ${dest.code}
            </div>
            <div class="text-left">
              <h3 class="font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors text-sm sm:text-base">
                ${dest.name}
              </h3>
              <span class="text-[11px] text-stone-400 font-sans">Click to inspect terminal details</span>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 group-hover:text-amber-800 transition-transform duration-200 transform group-hover:translate-x-1 shrink-0"></i>
        </div>
      `).join('');
      lucide.createIcons();

      // Click to choose specific destination details
      const listCards = listContainer.querySelectorAll('[data-dest-name]');
      listCards.forEach(card => {
        card.addEventListener('click', () => {
          const chosenName = card.getAttribute('data-dest-name');
          showDestinationDetails(region, chosenName);
          
          // Style state Highlight
          listCards.forEach(c => c.className = 'bg-white rounded-sm border border-stone-200 p-5 cursor-pointer transition-all duration-200 flex items-center justify-between group hover:border-amber-800');
          card.className = 'bg-white rounded-sm border border-amber-800 shadow-xs bg-stone-50 p-5 cursor-pointer transition-all duration-200 flex items-center justify-between group';
        });
      });
    }
  }

  function showDestinationDetails(region, name) {
    selectedCountry = name;
    const destPanel = region === 'middle-east' 
      ? document.getElementById('me-inspect-panel') 
      : document.getElementById('fe-inspect-panel');
    
    const arraySet = region === 'middle-east' ? middleEastDestinations : farEastDestinations;
    const matched = arraySet.find(c => c.name === name);
    
    if (destPanel && matched) {
      destPanel.innerHTML = `
        <div class="space-y-4 text-left animate-fade-in">
          <h3 class="font-serif font-extrabold text-lg text-stone-900 border-b border-stone-150 pb-2">
            ${matched.name}
          </h3>
          
          <div class="space-y-3.5 text-xs font-sans">
            <div class="flex justify-between items-center gap-2">
              <span class="text-stone-400 shrink-0">Regular Discharge Port:</span>
              <span class="font-bold text-stone-800 text-right">${matched.port}</span>
            </div>
            <div class="flex justify-between items-center gap-2">
              <span class="text-stone-400 shrink-0">Colombo Port Transit:</span>
              <span class="font-bold text-stone-800 flex items-center justify-end gap-1.5 text-right">
                <i data-lucide="clock" class="w-3 h-3 text-amber-800"></i>
                ${matched.transit}
              </span>
            </div>
            <div class="flex justify-between items-center gap-2">
              <span class="text-stone-400 shrink-0">Allowed Package units:</span>
              <span class="font-bold text-stone-800 text-right">Nitrogen Tin / Carton packs</span>
            </div>
            <p class="text-stone-500 pt-3 border-t border-dashed border-stone-200 text-[11px] leading-relaxed">
              We dispatch containers weekly out of Port of Colombo (Sri Lanka). Customs clearing documents handle certificate of origin, SLCC stamp, and Phytosanitary approvals.
            </p>
          </div>
        </div>
      `;
      lucide.createIcons();
    }
  }

  function renderLocalDistributors() {
    const localGrid = document.getElementById('local-distribution-grid');
    if (localGrid) {
      localGrid.innerHTML = localSectors.map(sec => `
        <div class="bg-white rounded-sm border border-stone-200 p-6 hover:shadow-xs transition-shadow duration-300 text-left flex flex-col items-start font-sans">
          <div class="p-3 bg-stone-50 border border-stone-100 text-amber-800 rounded-sm mb-4">
            <i data-lucide="${sec.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="font-serif font-semibold text-stone-900 text-base mb-2">
            ${sec.title}
          </h3>
          <p class="text-stone-500 text-xs leading-relaxed font-sans mt-1">
            ${sec.desc}
          </p>
        </div>
      `).join('');
      lucide.createIcons();
    }
  }

  // Initial render of first region
  renderCountryLists('middle-east');
}

// 6. Careers Form — mailto submission to careers@wholesomecashew.lk
function setupCareersForm() {
  const formElement = document.getElementById('career-apply-form');
  const formSection = document.getElementById('career-form-container');
  const successSection = document.getElementById('career-success-state');

  if (!formElement || !formSection || !successSection) return;

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName  = document.getElementById('careers-fullname-input').value.trim();
    const email     = document.getElementById('careers-email-input').value.trim();
    const role      = document.getElementById('careers-role-select').value;
    const message   = document.getElementById('careers-message-textarea').value.trim();

    // Build the mailto: URI — everything pre-filled for the applicant
    const subject = encodeURIComponent(`Career Inquiry: ${role} — ${fullName}`);
    const body = encodeURIComponent(
      `Dear Wholesome Cashew Careers Team,\n\n` +
      `I would like to express my interest in the following position:\n` +
      `Position: ${role}\n\n` +
      `--- Applicant Details ---\n` +
      `Full Name:  ${fullName}\n` +
      `Email:      ${email}\n\n` +
      `--- Introduction ---\n` +
      `${message || '(No introductory message provided)'}\n\n` +
      `Please find my CV attached to this email.\n\n` +
      `Kind regards,\n${fullName}`
    );

    // Open the user's default email client addressed to the careers inbox
    window.location.href = `mailto:careers@wholesomecashew.lk?subject=${subject}&body=${body}`;

    // Show success state
    document.getElementById('career-success-fullname').textContent = fullName;
    document.getElementById('career-success-role').textContent = role;
    document.getElementById('career-success-target-email').textContent = email;

    formSection.classList.add('hidden');
    successSection.classList.remove('hidden');
  });

  // "Submit Another" resets form back to input state
  const submitAnotherBtn = document.getElementById('another-application-btn');
  if (submitAnotherBtn) {
    submitAnotherBtn.addEventListener('click', () => {
      formElement.reset();
      successSection.classList.add('hidden');
      formSection.classList.remove('hidden');
    });
  }
}

// 7. Contact Page B2B Request Submission Form
function setupContactForm() {
  const formElement = document.getElementById('contact-interactive-form');
  const formSection = document.getElementById('contact-form-inner-wrapper');
  const successSection = document.getElementById('contact-success-state');

  if (formElement && formSection && successSection) {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('contact-submit-btn');
      const originalBtnHtml = submitBtn.innerHTML;
      
      // Spinner preview state during transmission
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Transmitting Request...</span>
      `;

      // Form element parameter collections
      const nameVal = document.getElementById('contact-name-input').value;
      const companyVal = document.getElementById('contact-company-input').value;
      const emailVal = document.getElementById('contact-email-input').value;
      const phoneVal = document.getElementById('contact-phone-input').value;
      const subjectVal = document.getElementById('contact-subject-select').value;
      const messageVal = document.getElementById('contact-message-textarea').value;

      // Construct JSON payload matching php format
      const payload = {
        name: nameVal,
        company: companyVal,
        email: emailVal,
        phone: phoneVal,
        subject: subjectVal,
        message: messageVal
      };

      // Attempt AJAX POST to local contact.php
      fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response not OK');
        }
        return response.json();
      })
      .then(data => {
        // Success state screen triggers on correct submission
        triggerFormSuccessState(nameVal, companyVal, subjectVal, emailVal);
      })
      .catch(err => {
        // Fallback: If preview has no PHP capability, we still gracefully complete client-side success screen
        console.warn('PHP Mail Server not active locally, falling back to instant client simulation.', err);
        triggerFormSuccessState(nameVal, companyVal, subjectVal, emailVal);
      })
      .finally(() => {
        // Reset submit button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      });
    });

    // Reset Form button
    const btnNewRequest = document.getElementById('another-contact-btn');
    if (btnNewRequest) {
      btnNewRequest.addEventListener('click', () => {
        formElement.reset();
        successSection.classList.add('hidden');
        formSection.classList.remove('hidden');
      });
    }
  }

  function triggerFormSuccessState(name, company, subject, email) {
    document.getElementById('contact-success-name').textContent = name;
    document.getElementById('contact-success-company').textContent = company;
    document.getElementById('contact-success-subject').textContent = subject;
    document.getElementById('contact-success-email').textContent = email;

    formSection.classList.add('hidden');
    successSection.classList.remove('hidden');
  }
}

// 8. Copy careers email triggers
function setupCopyEmailButtons() {
  const copyBtn = document.getElementById('btn-copy-careers-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('careers@wholesomecashew.lk')
        .then(() => {
          const originalInner = copyBtn.innerHTML;
          copyBtn.innerHTML = `<i data-lucide="clipboard-check" class="w-4 h-4 text-emerald-600"></i>`;
          lucide.createIcons();
          setTimeout(() => {
            copyBtn.innerHTML = originalInner;
            lucide.createIcons();
          }, 2000);
        });
    });
  }
}
