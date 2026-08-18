export interface ServiceDetail {
  slug: string
  num: string
  title: string
  lead: string
  price: string
  img: string
  stats: { value: string; label: string }[]
  included: { num: string; title: string; desc: string }[]
  steps: { label: string; title: string; desc: string; dark?: boolean }[]
  faqs: { q: string; a: string }[]
}

export const servicesData: Record<string, ServiceDetail> = {
  partnership: {
    slug: 'partnership',
    num: '01',
    title: 'Partnership',
    lead: 'Dedicated CAD design capacity, white-label collections, and priority turnaround for jewellery houses, studios, and independent makers worldwide.',
    price: 'Dedicated Studio · Priority Queue',
    img: '/gold-ring.webp',
    stats: [
      { value: '24 h', label: 'Quote & agreement' },
      { value: '3–5 days', label: 'Priority turnaround' },
      { value: '100%', label: 'White-label rights' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Dedicated Lead Modeller', desc: 'Direct communication with a master jeweller turned CAD author.' },
      { num: '02', title: 'Priority Queueing', desc: 'Guaranteed 3–5 day delivery for all incoming collection briefs.' },
      { num: '03', title: 'Stone & Spec Charts', desc: 'Complete gem count, cut, and millimeter dimensions exported per piece.' },
      { num: '04', title: 'White-Label Exclusivity', desc: 'Full commercial transfer — your brand owns 100% of the IP in writing.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Define the scope', desc: 'Share your collection brief or recurring monthly volume needs.' },
      { label: 'Step 02', title: 'Model & review', desc: '360° turntable renders sent at each iteration until fit is perfect.' },
      { label: 'Step 03', title: 'Production delivery', desc: 'Resin-tested watertight solids shipped with full licence.', dark: true },
    ],
    faqs: [
      { q: 'Who owns the finished files?', a: 'Your studio retains 100% commercial ownership. Cast, scale, and sell under your name without unit fees.' },
      { q: 'Will you sign an NDA?', a: 'Always, on request before any confidential design or reference is shared.' },
      { q: 'What if a file fails casting?', a: 'If the failure traces to our geometry, we fix and re-test the file at zero cost.' },
    ],
  },
  rings: {
    slug: 'rings',
    num: '02',
    title: 'Rings',
    lead: 'Solitaires, halos, eternity bands, and signets — engineered for correct metal thickness, stone seating, and size range scalability.',
    price: 'Parametric Sizing · Watertight',
    img: '/gold-ring.webp',
    stats: [
      { value: 'US 4–12', label: 'Parametric scale' },
      { value: '0.02 mm', label: 'Print tolerance' },
      { value: '98%', label: 'First-cast success' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Calculated Wall Thickness', desc: 'Minimum 1.2 mm shank wall to survive bench finishing without distortion.' },
      { num: '02', title: 'Girdle-Cut Seats', desc: 'Stone seats cut to the exact girdle profile — never a generic cone.' },
      { num: '03', title: 'Parametric Finger Sizes', desc: 'A full US 4–12 size range exported from one master geometry file.' },
      { num: '04', title: 'Shrinkage Allowance', desc: 'Pre-calculated metal and resin shrinkage built directly into the file.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Shank & setting build', desc: 'Authoring profile curves, finger sizes, and seat clearances in Rhino.' },
      { label: 'Step 02', title: 'Stone chart validation', desc: 'Verifying prong thickness and stone counts against supplier specs.' },
      { label: 'Step 03', title: 'Print test & export', desc: 'Resin-tested solids delivered in watertight .3DM, .STL, and .OBJ.', dark: true },
    ],
    faqs: [
      { q: 'Can I request custom finger sizes?', a: 'Yes. Every ring model is parametric and can be scaled to European, UK, or custom inner diameters.' },
      { q: 'Are stone seats ready for setters?', a: 'All seats are recessed to girdle height with correct pavilion clearance for immediate setting.' },
      { q: 'Is metal weight reported?', a: 'Yes. Metal volume in 14K, 18K gold and platinum is calculated and included with every file.' },
    ],
  },
  'zbrush-sculpting': {
    slug: 'zbrush-sculpting',
    num: '03',
    title: 'Zbrush Sculpting',
    lead: 'Organic bas-reliefs, heraldry, anatomical motifs, and complex freeform textures crafted with high-density digital sculpting.',
    price: 'High-poly Mesh · STL / OBJ',
    img: '/gold-ring.webp',
    stats: [
      { value: 'High-Poly', label: 'Watertight mesh' },
      { value: '0.02 mm', label: 'Detail resolution' },
      { value: 'Clean CAD', label: 'Boolean integration' },
      { value: '2 formats', label: '.STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'High-Density Bas-Relief', desc: 'Crisp micro-sculpting crafted to hold shadow after polishing.' },
      { num: '02', title: 'NURBS to Mesh Boolean', desc: 'Seamless fusion between organic sculpts and exact mechanical CAD shanks.' },
      { num: '03', title: 'Draft Angle Checks', desc: 'Ensuring undercut angles can be pulled from rubber molds cleanly.' },
      { num: '04', title: 'Decimated Print File', desc: 'Optimized polygon counts for fast slicing without losing organic detail.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Digital clay sculpting', desc: 'Building high-poly digital models from client sketches or anatomical references.' },
      { label: 'Step 02', title: 'Mechanical merge', desc: 'Merging organic sculpts with precise finger rings or pendant bails.' },
      { label: 'Step 03', title: 'Mesh repair & export', desc: 'Validating watertight closed mesh for direct resin 3D printing.', dark: true },
    ],
    faqs: [
      { q: 'Can you sculpt from 2D photos?', a: 'Yes. We convert flat photos, logos, or hand sketches into 3D sculpted bas-reliefs.' },
      { q: 'Will delicate details print?', a: 'We test all sculpted relief heights to ensure they meet the 0.02 mm resin print threshold.' },
      { q: 'Can the sculpt be combined with stones?', a: 'Absolutely. We carve organic surfaces around pre-cut stone seats and prongs.' },
    ],
  },
  render: {
    slug: 'render',
    num: '04',
    title: 'Render',
    lead: 'Studio-lit 4K photoreal stills, 360° turntable animations, and material showcases for ecommerce, portfolios, and client pitch decks.',
    price: '4K Ultra HD · 360° Turntable',
    img: '/gold-ring.webp',
    stats: [
      { value: '4K', label: 'Ultra HD Stills' },
      { value: '360°', label: 'Turntable Video' },
      { value: 'Photoreal', label: 'Gem Refraction' },
      { value: 'Transparent', label: 'PNG Backgrounds' },
    ],
    included: [
      { num: '01', title: 'Custom Studio Lighting', desc: 'Softbox setups tailored for high-polish gold, silver, and platinum.' },
      { num: '02', title: 'Accurate Gem Physics', desc: 'Raytraced dispersion and brilliance for diamonds, emeralds, and sapphires.' },
      { num: '03', title: 'Seamless 360° Animation', desc: 'Smooth MP4 / WEBM turntable video for online storefronts.' },
      { num: '04', title: 'Transparent Ecommerce Stills', desc: 'High-res PNG renders masked and ready for immediate catalog upload.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Scene setup & lighting', desc: 'Assigning physical metal materials, gem refractions, and studio lights.' },
      { label: 'Step 02', title: 'Draft preview', desc: 'Sending low-res camera angle samples for client framing approval.' },
      { label: 'Step 03', title: 'Final 4K render', desc: 'Exporting full 4K imagery and 60fps 360° animation files.', dark: true },
    ],
    faqs: [
      { q: 'What file formats do I need to send?', a: 'Send us .3DM, .STL, or .OBJ files along with your metal and gemstone specs.' },
      { q: 'Can you render multiple gold colors?', a: 'Yes. We render yellow, white, rose gold, and platinum versions of the same file.' },
      { q: 'How long does a render take?', a: 'Standard stills ship within 24–48 hours upon file receipt.' },
    ],
  },
  pendants: {
    slug: 'pendants',
    num: '05',
    title: 'Pendants',
    lead: 'Medallions, bezel-set drops, and complex locket assemblies designed with balanced bail placement and optimal weight distribution.',
    price: 'Bail Integrated · Castable',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Balanced', label: 'Center of gravity' },
      { value: '0.02 mm', label: 'Print tolerance' },
      { value: 'Integrated', label: 'Bail geometry' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Centered Bail Engineering', desc: 'Bail opening calculated so the pendant hangs straight without flipping.' },
      { num: '02', title: 'Hollow Rear Caging', desc: 'Structured light-pocketing to maximize front presence while lowering metal weight.' },
      { num: '03', title: 'Micro-Bezel & Prongs', desc: 'Reinforced claw geometry to withstand everyday wear on chains.' },
      { num: '04', title: 'Print-Ready Orientation', desc: 'Files pre-oriented for minimal sprue contact on high-polish faces.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Outline & bail CAD', desc: 'Modelling outer silhouette, stone layouts, and chain pass clearance.' },
      { label: 'Step 02', title: 'Hollowing & caging', desc: 'Adding rear weight reduction pockets and structural support ribs.' },
      { label: 'Step 03', title: 'QC & export', desc: 'Verifying watertight geometry and delivering final production files.', dark: true },
    ],
    faqs: [
      { q: 'Will the pendant hang straight?', a: 'Yes. We run center-of-mass checks during CAD authoring to prevent tilting.' },
      { q: 'Can you design custom bails?', a: 'We model hinged bails, hidden rear loops, or custom iced-out diamond bails.' },
      { q: 'Is the metal weight reported?', a: 'Exact metal volume in grams for 14K/18K/plat is included in the spec sheet.' },
    ],
  },
  grillz: {
    slug: 'grillz',
    num: '06',
    title: 'Grillz',
    lead: 'Custom dental caps, open-face frames, and iced pavé grillz authored directly from intraoral 3D scans for an anatomical fit.',
    price: '3D Scan Compatible · Dental CAD',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Scan Fit', label: 'Intraoral 3D mesh' },
      { value: '0.02 mm', label: 'Margin accuracy' },
      { value: 'Honeycomb', label: 'Iced pavé layout' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Direct Scan Alignment', desc: 'Modelling onto client STL dental stone models with offset tolerance.' },
      { num: '02', title: 'Iced-Out Pavé Layout', desc: 'Honeycomb stone spacing for maximum diamond coverage on tooth caps.' },
      { num: '03', title: 'Anatomical Retaining Bars', desc: 'Clean friction-fit retention bars designed for comfortable insertion.' },
      { num: '04', title: 'Thinned Margins', desc: 'Gumline margins tapered for zero irritation against soft tissue.' },
    ],
    steps: [
      { label: 'Step 01', title: '3D Scan preparation', desc: 'Cleaning intraoral mesh scan data and establishing insertion pathways.' },
      { label: 'Step 02', title: 'Cap & pavé authoring', desc: 'Modelling tooth caps, deep cuts, or honeycomb diamond settings.' },
      { label: 'Step 03', title: 'Fit test & export', desc: 'Verifying digital seating and exporting castable .STL files.', dark: true },
    ],
    faqs: [
      { q: 'Do you accept STL dental scans?', a: 'Yes. Send us 3D scans from Medit, iTero, or traditional impression scans.' },
      { q: 'How thick are the tooth caps?', a: 'Standard caps are authored at 0.6–0.8 mm thickness for structural strength.' },
      { q: 'Are stones cut to exact sizes?', a: 'All diamond grillz files include stone charts listing exact gem diameters.' },
    ],
  },
  watches: {
    slug: 'watches',
    num: '07',
    title: 'Watches',
    lead: 'Case architecture, bezel assemblies, dial indices, and custom link bracelets authored for Swiss-standard mechanical tolerances.',
    price: 'Case & Bezel Geometry',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Swiss Spec', label: 'Gasket tolerances' },
      { value: '0.01 mm', label: 'Thread precision' },
      { value: 'Modular', label: 'Multi-part assembly' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Movement Pocket Precision', desc: 'Exact dimensions for ETA, Sellita, or custom mechanical watch calibers.' },
      { num: '02', title: 'Gasket & Thread Seats', desc: 'Precision O-ring grooves and screw threads for water-resistance.' },
      { num: '03', title: 'Bespoke Bezel & Dial', desc: 'Diamond-set bezels and 3D dial markers engineered for clean assembly.' },
      { num: '04', title: 'Articulated Bracelet Links', desc: 'Solid end links and bracelet pins calculated for fluid movement.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Caliber blueprinting', desc: 'Establishing movement holding ring, crown stem, and crystal heights.' },
      { label: 'Step 02', title: 'Case sculpting & pavé', desc: 'Modelling lug curves, casebacks, screw threads, and gem settings.' },
      { label: 'Step 03', title: 'Assembly validation', desc: 'Checking fit clearances across multi-component watch assemblies.', dark: true },
    ],
    faqs: [
      { q: 'Do files account for crystal & gasket sizes?', a: 'Yes. All crystal seats and rubber gasket channels are authored to standard millimeter sizes.' },
      { q: 'Can you custom design ICED OUT watch bezels?', a: 'We model custom diamond bezels for Rolex, Audemars Piguet, and bespoke cases.' },
      { q: 'Are screw threads functional?', a: 'Screw threads are modeled to standard thread pitches for CNC or casting.' },
    ],
  },
  earrings: {
    slug: 'earrings',
    num: '08',
    title: 'Earrings',
    lead: 'Hoops, huggies, studs, and drop earrings calculated with hollowed weight reduction and secure post or clasp geometry.',
    price: 'Hollow Weight Balance',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Hollowed', label: 'Comfort weight' },
      { value: '0.02 mm', label: 'Print accuracy' },
      { value: 'Pair Files', label: 'Mirrored CAD' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Hollowed Weight Balance', desc: 'Core hollowing to keep total pair weight under comfortable wear limits.' },
      { num: '02', title: 'Mirrored Pair Export', desc: 'Left and Right asymmetric files pre-matched in ear orientation.' },
      { num: '03', title: 'Post & Nut Clearances', desc: 'Friction post notches and threaded post seats modeled for secure fit.' },
      { num: '04', title: 'Hinge & Latch Clearances', desc: 'Huggie click-latches engineered to snap securely post-casting.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Master profile CAD', desc: 'Drafting earring silhouette, front drop proportions, and post angle.' },
      { label: 'Step 02', title: 'Weight hollow & mirror', desc: 'Hollowing interior walls and creating true symmetrical left/right pairs.' },
      { label: 'Step 03', title: 'Print test & delivery', desc: 'Resin-testing latch mechanics and exporting production STL files.', dark: true },
    ],
    faqs: [
      { q: 'Will the earrings be too heavy to wear?', a: 'We calculate wall thickness down to 0.8 mm to ensure comfortable daily wear.' },
      { q: 'Are posts included in the CAD?', a: 'Standard post positions and notch channels are built directly into the file.' },
      { q: 'Do you deliver left and right pairs?', a: 'Yes. Every earring order includes mirrored Left and Right digital models.' },
    ],
  },
  bracelets: {
    slug: 'bracelets',
    num: '09',
    title: 'Bracelets',
    lead: 'Tennis bracelets, hinged cuffs, and articulated link assemblies featuring concealed clasps and fluid movement joints.',
    price: 'Articulated Links · Hidden Clasp',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Articulated', label: 'Fluid links' },
      { value: '0.02 mm', label: 'Print resolution' },
      { value: 'Concealed', label: 'Safety clasp' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Fluid Link Articulation', desc: 'Interlocking joint pins calculated with cast clearance to move smoothly.' },
      { num: '02', title: 'Integrated Safety Box Clasp', desc: 'Concealed tongue and double safety catches built into end links.' },
      { num: '03', title: 'Consistent Pavé Height', desc: 'Every link shares identical stone seat heights for a continuous line of light.' },
      { num: '04', title: 'Parametric Wrist Sizing', desc: 'Files provided with modular link additions for 6.0" to 8.5" wrist lengths.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Master link CAD', desc: 'Engineering single link geometry, pin holes, and stone settings.' },
      { label: 'Step 02', title: 'Clasp & joint assembly', desc: 'Modelling tongue spring box, safety latches, and end connections.' },
      { label: 'Step 03', title: 'Tolerance test & export', desc: 'Simulating joint movement and exporting production-ready STL files.', dark: true },
    ],
    faqs: [
      { q: 'Will the links move after casting?', a: 'Yes. Pin clearances are engineered with 0.15 mm tolerances so they flex as cast.' },
      { q: 'Is the box clasp functional?', a: 'The box clasp and safety arms are fully modeled and tested for spring tension.' },
      { q: 'How do I resize the bracelet?', a: 'Files are modular — simply add or remove master links to adjust overall length.' },
    ],
  },
  eyewear: {
    slug: 'eyewear',
    num: '10',
    title: 'Eyewear',
    lead: 'Precious metal frames, temple hinges, bridge components, and rimless mountings crafted for ergonomic luxury and structural strength.',
    price: 'Ergonomic Frames · Metal CAD',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Ergonomic', label: 'Face fit' },
      { value: '0.02 mm', label: 'Hinge precision' },
      { value: 'Lens Groove', label: 'Optical bevel' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Optical Lens Groove', desc: 'Beveled inner rim channel matched to standard eyewear lens curvature.' },
      { num: '02', title: 'Reinforced Temple Hinges', desc: '7-barrel or spring hinge mounts cast solid for durable temple movement.' },
      { num: '03', title: 'Ergonomic Bridge & Nose Pads', desc: 'Anatomical curvature and screw-in nose pad arms.' },
      { num: '04', title: 'Gold & Platinum Weight Balance', desc: 'Hollowed temples to keep precious metal frame weight comfortable.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Frame curvature blueprint', desc: 'Establishing lens base curve, bridge width, and pantoscopic tilt.' },
      { label: 'Step 02', title: 'Rim & hinge sculpting', desc: 'Authoring front rim bevels, temple arms, and diamond pavé accents.' },
      { label: 'Step 03', title: 'Fit check & export', desc: 'Validating optical groove dimensions and delivering watertight files.', dark: true },
    ],
    faqs: [
      { q: 'Are lens grooves compatible with optical lenses?', a: 'Yes. Lens bevel grooves are modeled to standard 1.2 mm optical lens profiles.' },
      { q: 'Can hinges be cast directly?', a: 'Hinge knuckles are modeled with exact pin tolerances for smooth assembly.' },
      { q: 'Is precious metal weight calculated?', a: 'Complete volume and weight breakdown for gold and titanium frames is included.' },
    ],
  },
  necklaces: {
    slug: 'necklaces',
    num: '11',
    title: 'Necklaces',
    lead: 'Statement collars, chain links, and multi-component gemstone strands authored with seamless flexibility and custom catches.',
    price: 'Flexible Links · Custom Catches',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Flex-Link', label: 'Collar curve' },
      { value: '0.02 mm', label: 'Print accuracy' },
      { value: 'Custom', label: 'Catches & locks' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Anatomical Collar Curve', desc: 'Necklace links contoured to sit flat against the neck without flipping.' },
      { num: '02', title: 'Multi-Stone Graduation', desc: 'Gem seats graduated smoothly in size from center piece to rear clasp.' },
      { num: '03', title: 'Integrated Custom Catch', desc: 'Seamless push-button or magnetic safety lock built into the design.' },
      { num: '04', title: 'Modular Link Files', desc: 'Master link files and full assembly layout files included in folder.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Collar sweep CAD', desc: 'Plotting anatomical neck curve and link graduation sequence.' },
      { label: 'Step 02', title: 'Link & lock modeling', desc: 'Authoring individual gemstone links and custom rear catch mechanics.' },
      { label: 'Step 03', title: 'Flex test & export', desc: 'Checking joint flexibility and exporting print-ready production STL files.', dark: true },
    ],
    faqs: [
      { q: 'Will the collar sit flat against the neck?', a: 'Yes. We model neck curves along 3D anatomical sweeps so links lay flat.' },
      { q: 'Can you design graduated diamond necklaces?', a: 'We model graduated Riviera, tennis, and collar necklaces with stone charts.' },
      { q: 'Are individual link files provided?', a: 'Yes. You receive both the full assembly file and individual link CAD files.' },
    ],
  },
  'product-design': {
    slug: 'product-design',
    num: '12',
    title: 'Product Design',
    lead: 'Luxury accessories, cufflinks, money clips, perfume hardware, and bespoke objets d’art authored from initial concept to tooling.',
    price: 'Concept to Production Tooling',
    img: '/gold-ring.webp',
    stats: [
      { value: 'Tooling', label: 'CNC / Casting' },
      { value: '0.01 mm', label: 'Mechanical fit' },
      { value: 'Modular', label: 'Multi-part hardware' },
      { value: '3 formats', label: '.3DM · .STL · .OBJ' },
    ],
    included: [
      { num: '01', title: 'Luxury Hardware Engineering', desc: 'Mechanical clasps, perfume cap inserts, and cufflink toggle mechanisms.' },
      { num: '02', title: 'CNC & Casting Compatibility', desc: 'Geometry formatted for either 5-axis CNC milling or lost-wax casting.' },
      { num: '03', title: 'Custom Monograms & Relief', desc: 'Deep-milled logos and textures engineered to hold crisp edges.' },
      { num: '04', title: 'Production Tooling Files', desc: 'STEP / IGES files provided on request for industrial manufacturing.' },
    ],
    steps: [
      { label: 'Step 01', title: 'Industrial blueprinting', desc: 'Drafting 3D object geometry, mechanical tolerances, and wall thicknesses.' },
      { label: 'Step 02', title: 'Surface sculpting', desc: 'Applying luxury finishes, monograms, or stone inlay channels.' },
      { label: 'Step 03', title: 'Tooling validation & export', desc: 'Checking assembly fit and exporting production-ready 3D formats.', dark: true },
    ],
    faqs: [
      { q: 'Can you provide STEP files for CNC manufacturing?', a: 'Yes. We export STEP and IGES files alongside standard STL/3DM formats.' },
      { q: 'Do you model functional mechanisms like cufflink toggles?', a: 'Yes. All moving parts are engineered with precise mechanical clearances.' },
      { q: 'Can you work from a physical prototype?', a: 'Send us photos, dimensions, or 3D scan data and we will recreate the piece in CAD.' },
    ],
  },
}
