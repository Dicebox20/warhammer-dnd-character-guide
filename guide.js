(() => {
  "use strict";

  const data = window.CHARACTER_GUIDE;
  const app = document.querySelector("#guide-app");
  const breadcrumbs = document.querySelector("#breadcrumbs");
  const meta = data.meta;
  const state = { fontScale: Number(localStorage.getItem("wh40k-guide-font-scale") || 1), spacious: localStorage.getItem("wh40k-guide-spacious") === "true", contrast: localStorage.getItem("wh40k-guide-contrast") === "true" };

  const esc = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const text = (value = "") => String(value)
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => `<p>${esc(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");

  const titleCase = (value = "") => String(value).replace(/[-_]/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());
  const bySlug = (items, slug) => items.find((item) => item.slug === slug);
  const classById = (id) => data.classes.find((item) => item.campaignId === id);
  const subclassById = (id) => data.subclasses.find((item) => item.campaignId === id);
  const featureById = (id) => data.features[id];
  const featureLink = (feature, label = feature?.name) => feature ? `<a href="#feature/${encodeURIComponent(feature.id)}" data-route="feature/${encodeURIComponent(feature.id)}">${esc(label)}</a>` : esc(label || "");
  const statusBadge = (status = "current") => status === "needs_review" || status === "authored-payload-needs-review"
    ? `<span class="status-badge status-badge--review">Needs review</span>`
    : `<span class="status-badge">Current</span>`;
  const tag = (label, muted = false) => `<span class="tag${muted ? " tag--muted" : ""}">${esc(label)}</span>`;
  const stat = (label, value) => `<div class="stat"><span class="stat__label">${esc(label)}</span><span class="stat__value">${esc(value || "—")}</span></div>`;
  const routeLink = (route, label, className = "") => `<a class="${className}" href="#${route}" data-route="${route}">${esc(label)}</a>`;
  const buttonLink = (route, label, className = "button") => `<a class="${className}" href="#${route}" data-route="${route}">${esc(label)}</a>`;

  const levelRow = (level) => {
    const names = level.names?.length ? level.names : ["Apply native level scaling and any linked advancement entries."];
    const milestone = names.some((name) => /ability score|talent|subclass|epic boon|extra attack|capstone/i.test(name));
    const namesHtml = names.map((name) => {
      const feature = level.features?.find((candidate) => candidate.name === name);
      return feature ? featureLink(feature) : esc(name);
    }).join("; ");
    return `<tr class="level-row${milestone ? " level-row--milestone" : ""}"><td class="level-number">${level.level}</td><td><span class="level-row__title">${namesHtml}</span></td></tr>`;
  };

  const levelsTable = (levels, caption = "Level-by-level advancement") => `<div class="table-wrap"><table><caption class="sr-only">${esc(caption)}</caption><thead><tr><th scope="col">Level</th><th scope="col">What changes</th></tr></thead><tbody>${levels.map(levelRow).join("")}</tbody></table></div>`;

  const tabbed = (tabs, panels, group = "tabs") => `<div class="tabbed" data-tab-group="${group}"><div class="sub-tabs" role="tablist" aria-label="Section tabs">${tabs.map((tab, index) => `<button type="button" role="tab" class="${index === 0 ? "active" : ""}" aria-selected="${index === 0}" data-tab-button="${tab.id}">${esc(tab.label)}</button>`).join("")}</div>${panels.map((panel, index) => `<section id="${group}-${panel.id}" role="tabpanel" data-tab-panel="${panel.id}"${index ? " hidden" : ""}>${panel.content}</section>`).join("")}</div>`;

  const featureCards = (features) => features?.length
    ? `<div class="card-grid">${features.map((feature) => `<article class="feature-card"><div class="option-card__top"><h3>${featureLink(feature)}</h3>${statusBadge(feature.status)}</div><div class="rich-text">${text(feature.description || "The feature is granted through the native advancement record.")}</div></article>`).join("")}</div>`
    : `<div class="empty-state">No individual feature entries are recorded on this page. Use the linked native Document and its advancement record.</div>`;

  const pageIntro = (title, intro, eyebrow = "Character guide") => `<p class="eyebrow">${esc(eyebrow)}</p><h2 class="page-title">${esc(title)}</h2><p class="page-intro">${intro}</p>`;

  function renderStart() {
    return `<section class="chapter-hero"><p class="eyebrow">Player's guide · Version ${esc(meta.version)}</p><h2>Build a character. Follow the path.</h2><p class="lead">A calm, linked guide to choosing a species, background, class, and subclass—then knowing exactly what happens at every level.</p><p>${esc(meta.rulesBaseline)}.</p><div class="hero-actions">${buttonLink("create", "Start character creation")} ${buttonLink("classes", "Browse classes", "button button--quiet")}</div></section>
      <div class="callout callout--green"><h3>How to use this book</h3><p>Read the short summary first. Open a detail page only when you are ready to compare choices. Gold-highlighted rows mark important level milestones. A <strong>Needs review</strong> label means the entry needs the documented source or manual fallback before it should be treated as final automation.</p></div>
      <div class="section-heading"><div><h2>Choose your next step</h2><p>You do not need to read everything at once.</p></div></div>
      <div class="quick-grid">
        <article class="quick-card"><h3>Make a new character</h3><p>Follow a seven-step checklist from concept to a finished level 1 sheet.</p>${buttonLink("create", "Open checklist", "link-button")}</article>
        <article class="quick-card"><h3>Compare species</h3><p>See movement, size, traits, and compatible classes in one place.</p>${buttonLink("species", `Browse ${meta.counts.species} species`, "link-button")}</article>
        <article class="quick-card"><h3>Find your class</h3><p>Start with role, primary ability, Hit Die, casting model, and subclass timing.</p>${buttonLink("classes", `Browse ${meta.counts.classes} classes`, "link-button")}</article>
        <article class="quick-card"><h3>Plan advancement</h3><p>Open a class track and walk through level 1–20 one level at a time.</p>${buttonLink("level-up", "Open level-up guide", "link-button")}</article>
      </div>
      <div class="section-heading"><div><h2>The whole character in one picture</h2><p>These choices stack in order. You can return to any earlier choice.</p></div></div>
      <div class="step-grid">
        <article class="step-card"><h3>Species</h3><p>Your people, body, senses, movement, and starting species traits.</p></article>
        <article class="step-card"><h3>Background</h3><p>Your former life, ability-score options, skills, tools, and Origin Talent.</p></article>
        <article class="step-card"><h3>Class</h3><p>Your core combat role, class features, resources, and level progression.</p></article>
        <article class="step-card"><h3>Subclass</h3><p>Your specialization. Most classes make this choice at level 3.</p></article>
      </div>`;
  }

  function renderCreate() {
    const steps = [
      ["Start with a concept", "Pick a simple sentence: who are you, what do you do under pressure, and what do you want? Mechanics can come after the idea.", "start"],
      ["Choose a species", "Choose from the eight playable species. Read the summary, then open the traits only when you want the exact rules.", "species"],
      ["Choose a background", "Pick the life your character had before the campaign. Backgrounds shape ability scores, skills, tools, and an Origin Talent.", "backgrounds"],
      ["Choose a class", "Choose the main way your character contributes in a scene. The class page shows the chassis, primary ability, Hit Die, casting model, and level spine.", "classes"],
      ["Record level 1", "Apply species traits, background advancement, class advancement, hit points, proficiencies, and any level 1 feature Items.", "foundry"],
      ["Choose a subclass later", "When your class reaches its subclass level—normally level 3—choose one of its linked subclasses. Restrictions are shown on each subclass page.", "subclasses"],
      ["Advance one level at a time", "When you level up, apply every entry at the new level. Use the level-up page, then open any feature link for its full text.", "level-up"]
    ];
    return `${pageIntro("Character creation", "Use this as a checklist. Complete one step, pause, and move to the next. If a choice feels complicated, read only the short card first.", "Chapter 1 · Build your character")}
      <div class="callout callout--blue"><h3>Before you begin</h3><p>Characters use the native D&amp;D5e 2024 workflow. This guide explains the order of choices and links to the mounted options; it is not a separate rules engine.</p></div>
      <div class="step-grid">${steps.map(([title, description, route], index) => `<article class="step-card"><h3>${index + 1}. ${esc(title)}</h3><p>${esc(description)}</p>${buttonLink(route, `Open ${title.toLowerCase()}`, "link-button")}</article>`).join("")}</div>
      <div class="section-heading"><div><h2>Level 1 finish line</h2><p>Before play begins, you should be able to answer these questions.</p></div></div>
      <div class="quick-grid"><article class="quick-card"><h3>What can I do?</h3><p>Know your class's level 1 features, action options, and species traits.</p></article><article class="quick-card"><h3>What am I good at?</h3><p>Know your primary ability, saving throws, trained skills, and background choices.</p></article><article class="quick-card"><h3>What happens next?</h3><p>Know your subclass level and the next milestone on your class track.</p></article></div>`;
  }

  function renderSpeciesList() {
    return `${pageIntro("Species", `${meta.counts.species} playable species. Start with the short description, then open a species for its full trait list and compatible class links.`, "Chapter 2 · Who you are")}
      <div class="filter-bar"><label class="sr-only" for="species-filter">Filter species</label><input id="species-filter" type="search" data-live-filter="species-card" placeholder="Filter by species or trait…"><span class="filter-note">Tip: search “darkvision”, “small”, or a class name.</span></div>
      <div class="card-grid">${data.species.map((species) => `<article class="option-card" data-filter-item="species-card" data-filter-text="${esc([species.name, species.description, species.compatibleClasses.join(" "), species.traits.map((trait) => `${trait.name} ${trait.description}`).join(" ")].join(" ").toLowerCase())}"><div class="option-card__top"><h3>${routeLink(`species/${species.slug}`, species.name)}</h3>${statusBadge(species.status)}</div><p class="option-card__meta">${esc(titleCase(species.size))} · ${esc(species.speed)} ft. Speed</p><p>${text(species.traits[0]?.description || species.description)}</p><div>${species.traits.slice(0, 4).map((trait) => tag(trait.name)).join("")}${species.traits.length > 4 ? tag(`+${species.traits.length - 4} more`, true) : ""}</div><div class="option-card__footer"><span class="small muted">${species.traits.length} species traits</span>${buttonLink(`species/${species.slug}`, "Read species", "link-button")}</div></article>`).join("")}</div>`;
  }

  function renderSpeciesDetail(species) {
    const compatible = species.compatibleClasses.length ? species.compatibleClasses.map((name) => data.classes.find((item) => item.name === name)).filter(Boolean) : [];
    const traitSummary = species.traits.map((trait) => `<li><strong>${esc(trait.name)}.</strong> ${esc(trait.description)}</li>`).join("");
    const overview = `<div class="two-column"><div><div class="stat-grid">${stat("Size", titleCase(species.size))}${stat("Speed", `${species.speed} ft.`)}${stat("Traits", species.traits.length)}${stat("Status", species.status === "needs_review" ? "Needs review" : "Current")}</div><div class="callout"><h3>Quick read</h3><p>Choose ${esc(species.name)} when its identity and traits fit the character you want to play. Species traits are granted through the native D&amp;D5e Advancement workflow.</p></div><div class="rich-text">${text(species.description)}</div></div><aside class="reading-panel"><h3>Compatible classes</h3><p class="small muted">Open a class to compare the full progression.</p><ul>${compatible.map((item) => `<li>${routeLink(`classes/${item.slug}`, item.name)}</li>`).join("") || "<li>Check the campaign's compatibility guidance.</li>"}</ul></aside></div>`;
    const traits = `<div class="reading-panel"><h3>Traits at a glance</h3><p>These are the exact species traits connected to the Species Item.</p><ul class="note-list">${traitSummary}</ul></div>`;
    const build = `<div class="callout callout--green"><h3>Simple choice rule</h3><p>Pick the species whose story and movement feel right. Then use its trait list as a compact reference during play. You do not need to memorize every trait before session one.</p></div><div class="card-grid">${compatible.map((item) => `<article class="quick-card"><h3>${routeLink(`classes/${item.slug}`, item.name)}</h3><p>${esc(item.summary)}</p></article>`).join("")}</div>`;
    return `${pageIntro(species.name, `A focused species page: first the quick facts, then the full trait text, then a small build note.`, "Chapter 2 · Species")}${tabbed([{ id: "overview", label: "At a glance" }, { id: "traits", label: "Traits" }, { id: "build", label: "Build notes" }], [{ id: "overview", content: overview }, { id: "traits", content: traits }, { id: "build", content: build }], `species-${species.slug}`)}`;
  }

  function renderBackgrounds() {
    return `${pageIntro("Backgrounds", `${meta.counts.backgrounds} backgrounds describe the work, culture, or life your character had before the campaign. Read the three bold facts first: ability scores, skills, and Origin Talent.`, "Chapter 3 · Where you came from")}
      <div class="callout callout--blue"><h3>Backgrounds are about the person before the adventure</h3><p>A background is not a second class. It gives a small set of starting proficiencies and an Origin Talent while leaving your class to define your main adventuring role.</p></div>
      <div class="filter-bar"><label class="sr-only" for="background-filter">Filter backgrounds</label><input id="background-filter" type="search" data-live-filter="background-card" placeholder="Filter by role, skill, or talent…"><span class="filter-note">The exact equipment packages remain a separate conversion boundary.</span></div>
      <div class="card-grid">${data.backgrounds.map((background) => `<article class="option-card" data-filter-item="background-card" data-filter-text="${esc([background.name, background.description, background.abilityScores, background.skills, background.tools, background.originTalent].join(" ").toLowerCase())}"><div class="option-card__top"><h3>${esc(background.name)}</h3>${statusBadge(background.status)}</div><p>${esc(background.summary)}</p><div class="stat-grid">${stat("Ability scores", background.abilityScores)}${stat("Origin Talent", background.originTalent)}</div><p class="small"><strong>Skills:</strong> ${esc(background.skills)}<br><strong>Tools:</strong> ${esc(background.tools)}</p><div class="option-card__footer"><span class="small muted">Native: ${esc(background.nativeBackground)}</span></div></article>`).join("")}</div>`;
  }

  function renderClassesList() {
    return `${pageIntro("Classes", `${meta.counts.classes} base classes. Each class page begins with an easy summary, then shows its level 1–20 track and subclass choices.`, "Chapter 4 · What you do")}
      <div class="callout"><h3>Pick a role before you pick a feature</h3><p>Ask: do I want to lead from the front, control space, solve problems, support the group, or bring dangerous power? The short summary on each card is enough for a first pass.</p></div>
      <div class="card-grid">${data.classes.map((cls) => `<article class="option-card"><div class="option-card__top"><h3>${routeLink(`classes/${cls.slug}`, cls.name)}</h3>${statusBadge(cls.status)}</div><p>${esc(cls.summary)}</p><div class="stat-grid">${stat("Chassis", cls.chassis)}${stat("Hit Die", cls.hitDie)}${stat("Primary ability", cls.primaryAbility.join(" / ") || cls.primaryAbility)}${stat("Subclass", cls.subclassCadence)}</div><p class="small"><strong>Casting:</strong> ${esc(cls.spellcasting?.progression || "none")} · <strong>Subclasses:</strong> ${cls.subclassIds.length}</p><div>${cls.subclassIds.map((id) => { const sub = subclassById(id); return sub ? tag(sub.name, true) : ""; }).join("")}</div><div class="option-card__footer">${buttonLink(`classes/${cls.slug}`, "Read class", "link-button")}</div></article>`).join("")}</div>`;
  }

  function renderClassDetail(cls) {
    const subclasses = cls.subclassIds.map(subclassById).filter(Boolean);
    const overview = `<div class="two-column"><div><div class="stat-grid">${stat("Chassis", cls.chassis)}${stat("Hit Die", cls.hitDie)}${stat("Primary ability", cls.primaryAbility.join(" / ") || cls.primaryAbility)}${stat("Subclass levels", cls.subclassCadence)}</div><div class="callout"><h3>Recommended starting array</h3><p>${esc(cls.recommendedArray)}</p></div><div class="rich-text">${text(cls.text)}</div></div><aside class="reading-panel"><h3>At a glance</h3><ul class="note-list"><li><strong>Role:</strong> ${esc(cls.summary)}</li><li><strong>Casting:</strong> ${esc(cls.spellcasting?.progression || "none")}</li><li><strong>Preparation:</strong> ${esc(cls.spellcasting?.preparation || "native class rules")}</li></ul><p>${buttonLink(`level-up/${cls.slug}`, `Open ${cls.name} level track`, "link-button")}</p></aside></div>`;
    const track = `<p class="page-intro">Read down the table. Gold rows mark a larger decision or milestone. Open a linked feature when you want the exact text.</p>${levelsTable(cls.levels, `${cls.name} level progression`)}`;
    const subclassList = `<div class="card-grid">${subclasses.map((subclass) => `<article class="option-card"><div class="option-card__top"><h3>${routeLink(`subclasses/${subclass.slug}`, subclass.name)}</h3>${subclass.restriction ? tag(subclass.restriction, true) : ""}</div><p>${esc(subclass.summary)}</p><p class="small muted">Features at: ${subclass.levels.filter((level) => level.names.length).map((level) => level.level).join(", ") || "See source entry"}</p><div class="option-card__footer">${buttonLink(`subclasses/${subclass.slug}`, "Read subclass", "link-button")}</div></article>`).join("")}</div>`;
    return `${pageIntro(cls.name, `${esc(cls.summary)} Choose this page's first tab for the short read, its second tab for the full level track, and its third tab for specialization choices.`, "Chapter 4 · Classes")}${tabbed([{ id: "overview", label: "Overview" }, { id: "track", label: "Level 1–20" }, { id: "subclasses", label: "Subclasses" }], [{ id: "overview", content: overview }, { id: "track", content: track }, { id: "subclasses", content: subclassList }], `class-${cls.slug}`)}`;
  }

  function renderSubclassesList() {
    const groups = data.classes.map((cls) => [cls, data.subclasses.filter((subclass) => subclass.classId === cls.campaignId)]).filter(([, subclasses]) => subclasses.length);
    return `${pageIntro("Subclasses", `${meta.counts.subclasses} specializations grouped under their owning class. A subclass becomes available when the parent class reaches its subclass level.`, "Chapter 5 · How you specialize")}
      <div class="callout callout--red"><h3>Subclass restrictions matter</h3><p>Read the restriction badge before choosing. For example, Warp Spider is Aeldari-only, and the Space Marine subclasses are Human/Space Marine only.</p></div>
      ${groups.map(([cls, subclasses]) => `<section><div class="section-heading"><div><h2>${routeLink(`classes/${cls.slug}`, cls.name)}</h2><p>${esc(cls.subclassCadence)} · ${subclasses.length} specializations</p></div></div><div class="card-grid">${subclasses.map((subclass) => `<article class="option-card"><div class="option-card__top"><h3>${routeLink(`subclasses/${subclass.slug}`, subclass.name)}</h3>${subclass.restriction ? tag(subclass.restriction, true) : ""}</div><p>${esc(subclass.summary)}</p><p class="small muted">Feature levels: ${subclass.levels.filter((level) => level.names.length).map((level) => level.level).join(", ") || "See source entry"}</p><div class="option-card__footer">${buttonLink(`subclasses/${subclass.slug}`, "Read subclass", "link-button")}</div></article>`).join("")}</div></section>`).join("")}`;
  }

  function renderSubclassDetail(subclass) {
    const cls = classById(subclass.classId);
    const overview = `<div class="two-column"><div><div class="stat-grid">${stat("Parent class", cls?.name || subclass.className)}${stat("First feature", subclass.levels.find((level) => level.names.length)?.level ? `Level ${subclass.levels.find((level) => level.names.length).level}` : "See source")}${stat("Features", subclass.featureCount)}${stat("Restriction", subclass.restriction || "None listed")}</div><div class="rich-text">${text(subclass.description)}</div></div><aside class="reading-panel"><h3>Choosing this subclass</h3><p>Choose it when the focus sounds like the character you want to play. The parent class still supplies the core chassis and shared level track.</p><p>${cls ? buttonLink(`classes/${cls.slug}`, `Back to ${cls.name}`, "link-button") : ""}</p></aside></div>`;
    const track = `<p class="page-intro">These are the feature levels recorded on the native Subclass Item. Open a feature name for the full description and review status.</p>${levelsTable(subclass.levels, `${subclass.name} feature track`)}`;
    const features = featureCards(subclass.levels.flatMap((level) => level.features));
    return `${pageIntro(subclass.name, `${esc(subclass.summary)} This page keeps the subclass focused: summary first, feature track second, exact feature text third.`, `Chapter 5 · ${subclass.className} subclass`)}${tabbed([{ id: "overview", label: "Overview" }, { id: "track", label: "Feature track" }, { id: "features", label: "Feature text" }], [{ id: "overview", content: overview }, { id: "track", content: track }, { id: "features", content: features }], `subclass-${subclass.slug}`)}`;
  }

  function renderLevelUp(classSlug = data.classes[0]?.slug) {
    const selected = bySlug(data.classes, classSlug) || data.classes[0];
    return `${pageIntro("Level up", "Choose a class tab, then read one level at a time. You do not need to scan the entire table to make the next decision.", "Chapter 6 · Advancement")}
      <div class="chapter-tabs" role="tablist" aria-label="Choose a class level track">${data.classes.map((cls) => `<a href="#level-up/${cls.slug}" data-route="level-up/${cls.slug}" class="${cls.slug === selected.slug ? "active" : ""}" role="tab" aria-selected="${cls.slug === selected.slug}">${esc(cls.name)}</a>`).join("")}</div>
      <div class="callout callout--blue"><h3>The level-up procedure</h3><p>Increase the class level. Apply every class advancement entry at that level. Resolve hit points, proficiency bonus, power or slot changes, ASI/feat choices, subclass features, and capstones as applicable. Use the native Class/Subclass Items as the authoritative Documents.</p></div>
      <div class="two-column"><div><h3>${esc(selected.name)} · Level 1–20</h3><p class="page-intro">${esc(selected.summary)} Subclass cadence: ${esc(selected.subclassCadence)}.</p>${levelsTable(selected.levels, `${selected.name} level-up table`)}</div><aside class="reading-panel"><h3>Milestones</h3><ul class="note-list"><li><strong>Subclass:</strong> ${esc(selected.subclassCadence)}</li><li><strong>Talent / ASI:</strong> ${selected.levels.filter((level) => level.names.some((name) => /ability score|talent/i.test(name))).map((level) => level.level).join(", ") || "See class track"}</li><li><strong>Epic Boon:</strong> ${selected.levels.find((level) => level.names.some((name) => /epic boon/i.test(name)))?.level || "See class track"}</li></ul><p>${buttonLink(`classes/${selected.slug}`, `Open ${selected.name}`, "link-button")}</p></aside></div>`;
  }

  function renderOptions() {
    const generalTalents = data.talents.filter((talent) => talent.category !== "Epic Boon");
    const boons = data.talents.filter((talent) => talent.category === "Epic Boon");
    return `${pageIntro("Talents & powers", "These are supporting character choices. Read the short rule first, then follow the linked native entry when you need the exact mechanics.", "Chapter 7 · Supporting choices")}
      <div class="callout"><h3>Talent choices</h3><p>Talents use native D&amp;D5e feat Items. Epic Boon display aliases point back to native mechanics; they are not a second feat engine.</p></div>
      <div class="section-heading"><div><h2>General talents</h2><p>${generalTalents.length} campaign display options.</p></div></div>
      <div class="card-grid">${generalTalents.map((talent) => `<article class="option-card"><div class="option-card__top"><h3>${esc(talent.name)}</h3>${statusBadge(talent.status)}</div><div class="rich-text">${text(talent.description)}</div>${talent.prerequisite ? `<p class="small"><strong>Prerequisite:</strong> ${esc(talent.prerequisite)}</p>` : ""}</article>`).join("")}</div>
      <div class="section-heading"><div><h2>Epic Boon aliases</h2><p>${boons.length} display names for native level 19+ boon choices.</p></div></div>
      <div class="card-grid">${boons.map((talent) => `<article class="option-card"><div class="option-card__top"><h3>${esc(talent.name)}</h3>${statusBadge(talent.status)}</div><p>${text(talent.description)}</p><p class="small muted">Native name: ${esc(talent.nativeName || "Use the linked native feat")}</p></article>`).join("")}</div>
      <div class="section-heading"><div><h2>Powers and class lists</h2><p>Power labels are contextual presentation; the underlying D&amp;D5e Item type and keys remain native.</p></div></div>
      <div class="quick-grid"><article class="quick-card"><h3>Psyker</h3><p>Psychic Powers. Full-caster progression with Warp Exposure, Draw from the Warp, and Perils.</p></article><article class="quick-card"><h3>Tech-Adept</h3><p>Tech Abilities. Full-caster progression with Tech Upgrades and prepared abilities.</p></article><article class="quick-card"><h3>Zealot</h3><p>Invocations. A martial full caster with Fervor and subclass-only auras.</p></article><article class="quick-card"><h3>Artillerist</h3><p>Ordnance uses spell-shaped Documents as an implementation surface, not as true spellcasting.</p></article></div>`;
  }

  function renderFoundry() {
    return `${pageIntro("Foundry character workflow", "This page is for the practical moment when you move from reading to a character sheet.", "Chapter 8 · Using the module")}
      <div class="step-grid"><article class="step-card"><h3>GM: enable the module</h3><p>Use a D&amp;D5e 2024 world with the module enabled. The module keeps Foundry and D&amp;D5e native keys while adding Warhammer-facing labels and stable campaign IDs.</p></article><article class="step-card"><h3>GM: inject approved packs</h3><p>Use the Injection Macro to copy approved non-item packs into the world. Run dry-run mode first when the world already contains partial content.</p></article><article class="step-card"><h3>Player: create the Actor</h3><p>Choose a Species Item, Background Item, and Class Item. Let native D&amp;D5e Advancement entries apply the connected traits and features.</p></article><article class="step-card"><h3>Player: inspect the sheet</h3><p>Use the linked feature Items as the rules text. Keep the relevant manual fallback nearby when an optional automation module is absent or a feature is review-gated.</p></article></div>
      <div class="callout callout--red"><h3>Manual fallback boundary</h3><p>Do not infer missing range, target, action, resource, save, damage, scaling, or effect values from a catalog name or short note. Resolve the complete approved source text or use the documented manual fallback.</p></div>
      <div class="section-heading"><div><h2>What this guide does not change</h2><p>It is a navigation layer over the module's native Documents.</p></div></div>
      <ul class="note-list"><li>Native D&amp;D5e document types, internal keys, and Advancement structures remain authoritative.</li><li>Optional automation modules may assist execution but do not define campaign rules.</li><li>Final held equipment, ammunition, and merchant payloads remain outside the approved character-option boundary.</li><li>A <strong>Needs review</strong> label is a review boundary, not permission to treat incomplete data as final mechanics.</li></ul>`;
  }

  function renderGlossary() {
    return `${pageIntro("Glossary", "Short definitions for the terms that appear throughout the guide.", "Reference")}<div class="card-grid">${data.glossary.map((entry) => `<article class="quick-card"><h3>${esc(entry.term)}</h3><p>${esc(entry.definition)}</p></article>`).join("")}</div><div class="callout callout--green"><h3>Reading tip</h3><p>If you forget a term, return here instead of searching the whole book. The global search box also finds class, species, subclass, and feature names.</p></div>`;
  }

  function renderFeature(id) {
    const feature = featureById(id);
    if (!feature) return `<div class="empty-state"><h2>Feature not found</h2><p>The requested feature is not in the generated guide data.</p>${buttonLink("start", "Return to start", "link-button")}</div>`;
    const cls = classById(feature.ownerClassId);
    const subclass = subclassById(feature.ownerSubclassId);
    return `${pageIntro(feature.name, `${feature.category} · level ${feature.level || "as listed"}`, "Reference · Feature text")}<div class="feature-detail"><div class="stat-grid">${stat("Category", feature.category)}${stat("Level", feature.level || "As listed")}${stat("Class", cls?.name || "Shared")}${stat("Status", feature.status === "needs_review" ? "Needs review" : "Current")}</div><div class="callout"><h3>Where it comes from</h3><p>${subclass ? `This feature belongs to ${routeLink(`subclasses/${subclass.slug}`, subclass.name)}, under ${esc(cls?.name || "its parent class")}.` : cls ? `This feature belongs to ${routeLink(`classes/${cls.slug}`, cls.name)}.` : "This is a shared or source-level feature entry."}</p></div><div class="feature-detail__description">${text(feature.description || "The native feature entry supplies the detailed rules text.")}</div>${feature.status === "needs_review" ? `<div class="callout callout--red"><h3>Review boundary</h3><p>Use the linked source and the documented native/manual fallback before relying on this feature as final automation.</p></div>` : ""}</div>`;
  }

  function searchableRecords() {
    const records = [];
    for (const species of data.species) records.push({ type: "Species", name: species.name, text: `${species.description} ${species.traits.map((trait) => `${trait.name} ${trait.description}`).join(" ")}`, route: `species/${species.slug}` });
    for (const cls of data.classes) records.push({ type: "Class", name: cls.name, text: `${cls.summary} ${cls.text} ${cls.levels.flatMap((level) => level.names).join(" ")}`, route: `classes/${cls.slug}` });
    for (const subclass of data.subclasses) records.push({ type: "Subclass", name: subclass.name, text: `${subclass.summary} ${subclass.description} ${subclass.levels.flatMap((level) => level.names).join(" ")}`, route: `subclasses/${subclass.slug}` });
    for (const background of data.backgrounds) records.push({ type: "Background", name: background.name, text: background.description, route: "backgrounds" });
    for (const feature of Object.values(data.features)) records.push({ type: feature.category, name: feature.name, text: feature.description, route: `feature/${feature.id}` });
    return records;
  }

  function renderSearch(query) {
    const normalized = query.trim().toLowerCase();
    const results = normalized ? searchableRecords().filter((record) => `${record.name} ${record.text}`.toLowerCase().includes(normalized)).slice(0, 60) : [];
    return `${pageIntro("Search results", normalized ? `Showing matches for “${esc(query)}”. Choose a result to open its focused page.` : "Type a word or phrase in the search box above.", "Reference")}${results.length ? `<div class="search-results">${results.map((record) => `<a class="search-result" href="#${record.route}" data-route="${record.route}"><strong>${esc(record.name)}</strong><span>${esc(record.type)} · ${esc(record.text.slice(0, 180))}${record.text.length > 180 ? "…" : ""}</span></a>`).join("")}</div>` : normalized ? `<div class="empty-state">No matches yet. Try a shorter word, such as “warp”, “armor”, “stealth”, or “subclass”.</div>` : ""}`;
  }

  function parseRoute() {
    const raw = decodeURIComponent(location.hash.replace(/^#/, "") || "start");
    const [path, queryString = ""] = raw.split("?");
    const query = new URLSearchParams(queryString);
    return { parts: path.split("/").filter(Boolean), query };
  }

  function updateBreadcrumbs(parts) {
    const labels = { start: "Start here", create: "Build a character", species: "Species", backgrounds: "Backgrounds", classes: "Classes", subclasses: "Subclasses", "level-up": "Level up", options: "Talents & powers", foundry: "Foundry guide", glossary: "Glossary", feature: "Feature" };
    const crumbs = [`<a href="#start" data-route="start">Guide</a>`];
    if (parts[0] && labels[parts[0]]) crumbs.push(`<span aria-hidden="true">›</span><span>${labels[parts[0]]}</span>`);
    if (parts[1]) crumbs.push(`<span aria-hidden="true">›</span><span class="breadcrumbs__current">${esc(titleCase(parts[1]))}</span>`);
    breadcrumbs.innerHTML = crumbs.join("");
  }

  function updateNavigation(parts) {
    const root = parts[0] || "start";
    document.querySelectorAll(".main-nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === root));
  }

  function render() {
    const { parts, query } = parseRoute();
    updateBreadcrumbs(parts);
    updateNavigation(parts);
    let content;
    if (parts[0] === "species" && parts[1]) content = renderSpeciesDetail(bySlug(data.species, parts[1]) || data.species[0]);
    else if (parts[0] === "species") content = renderSpeciesList();
    else if (parts[0] === "classes" && parts[1]) content = renderClassDetail(bySlug(data.classes, parts[1]) || data.classes[0]);
    else if (parts[0] === "classes") content = renderClassesList();
    else if (parts[0] === "subclasses" && parts[1]) content = renderSubclassDetail(bySlug(data.subclasses, parts[1]) || data.subclasses[0]);
    else if (parts[0] === "subclasses") content = renderSubclassesList();
    else if (parts[0] === "level-up") content = renderLevelUp(parts[1]);
    else if (parts[0] === "feature") content = renderFeature(parts[1]);
    else if (parts[0] === "search") content = renderSearch(query.get("q") || "");
    else if (parts[0] === "create") content = renderCreate();
    else if (parts[0] === "backgrounds") content = renderBackgrounds();
    else if (parts[0] === "options") content = renderOptions();
    else if (parts[0] === "foundry") content = renderFoundry();
    else if (parts[0] === "glossary") content = renderGlossary();
    else content = renderStart();
    app.innerHTML = content;
    bindInteractiveContent();
    document.title = `${parts[1] ? titleCase(parts[1]) + " · " : ""}${meta.title}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindInteractiveContent() {
    document.querySelectorAll("[data-live-filter]").forEach((input) => input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll(`[data-filter-item="${input.dataset.liveFilter}"]`).forEach((item) => {
        item.hidden = query && !item.dataset.filterText.includes(query);
      });
    }));
    document.querySelectorAll("[data-tab-button]").forEach((button) => button.addEventListener("click", () => {
      const group = button.closest("[data-tab-group]");
      group.querySelectorAll("[data-tab-button]").forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle("active", active);
        candidate.setAttribute("aria-selected", String(active));
      });
      group.querySelectorAll("[data-tab-panel]").forEach((panel) => { panel.hidden = panel.dataset.tabPanel !== button.dataset.tabButton; });
    }));
    document.querySelectorAll("[data-route]").forEach((link) => link.addEventListener("click", (event) => {
      const route = link.dataset.route;
      if (!route) return;
      event.preventDefault();
      location.hash = route;
    }));
  }

  function applyReadingSettings() {
    document.body.classList.toggle("spacious", state.spacious);
    document.body.classList.toggle("high-contrast", state.contrast);
    document.documentElement.style.setProperty("--body-size", `${(1.08 * state.fontScale).toFixed(3)}rem`);
    document.querySelector('[data-reading-action="spacious"]')?.setAttribute("aria-pressed", String(state.spacious));
    document.querySelector('[data-reading-action="contrast"]')?.setAttribute("aria-pressed", String(state.contrast));
  }

  document.querySelectorAll("[data-count]").forEach((element) => { element.textContent = meta.counts[element.dataset.count] ?? ""; });
  document.querySelectorAll('[data-meta="version"]').forEach((element) => { element.textContent = meta.version; });
  document.querySelector("#search-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.querySelector("#global-search").value.trim();
    location.hash = `search?q=${encodeURIComponent(query)}`;
  });
  document.querySelectorAll("[data-reading-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.readingAction;
    if (action === "larger") state.fontScale = Math.min(1.35, state.fontScale + .05);
    if (action === "smaller") state.fontScale = Math.max(.9, state.fontScale - .05);
    if (action === "spacious") state.spacious = !state.spacious;
    if (action === "contrast") state.contrast = !state.contrast;
    localStorage.setItem("wh40k-guide-font-scale", String(state.fontScale));
    localStorage.setItem("wh40k-guide-spacious", String(state.spacious));
    localStorage.setItem("wh40k-guide-contrast", String(state.contrast));
    applyReadingSettings();
  }));
  window.addEventListener("hashchange", render);
  applyReadingSettings();
  render();
})();
