
---

# 文档 1：网站信息架构 PRD（给 Cursor 的“产品说明书”）

## 0. 项目目标与定位

### 0.1 一句话定位

全站主线是 **Measure → Intervene → Evidence → Scale**，把真实课堂与产品场景的问题抽象为研究议题，用严谨评估建立证据，再把证据沉入可规模化的学习系统。

### 0.2 网站风格方向（客户聊天对齐版）

* 学术取向、内容优先、结构清晰、低装饰（对标 Stanford/Harvard 教育类站点的阅读体验）
* “卡片”用于承载密集文本与分块理解（你客户也明确说了“把文字放到卡片中”）

### 0.3 品牌与基础文案（全站通用）

* Name：**Caesar Su**（如需替换为客户姓名，整体全文统一替换）
* Tagline（short）：**Evidence-based EdTech Innovation**
* Tagline（long）：**Building measurable, interpretable, and scalable learning systems—bridging research, product, and real classrooms.**
* Top navigation（5项）：Home / Research Agenda / Selected Work / Venture & Product Innovation / CV & Contact
* Global CTA：

  * Primary：**View Selected Work**
  * Secondary：**Get in Touch**
* Footer microcopy：**© Caesar Su — Evidence-based EdTech Innovation**；链接：Email · LinkedIn · GitHub · CV PDF
* SEO（copy/paste）：

  * Meta title：**Caesar Su | Evidence-based EdTech Innovator**
  * Meta description：PRD 已给完整版本，直接粘贴即可。

---

## 1) 站点地图与路由规划（静态站最佳实践）

你当前是纯 HTML/CSS/JS，建议用“顶级页 + work 子目录 case”：

* `/index.html`（Home）
* `/research.html`（Research Agenda）
* `/work.html`（Selected Work 列表）
* `/work/*.html`（每个 Case Study 详情页：A~G + 2个短卡可选）
* `/venture.html`（Venture & Product Innovation）
* `/cv.html`（CV / Contact）

> 关键：**Selected Work 列表只做“摘要卡片”，点进去才出现完整六段模板**（Context/Problem/Approach/Evidence/Artifacts/My Role）。

---

## 2) 全站通用组件（Cursor 需要知道的“布局积木”）

### 2.1 Header（全页一致）

* 左：Name（可点击回 Home）
* 中：5 个导航
* 右：Primary CTA（View Selected Work）/ Secondary CTA（Get in Touch）

### 2.2 Page Header（每页顶部一致）

每个页面都有：

* Headline（页面标题）
* Subheadline（1句解释）
* 可选：tag chips 或补充说明（只在 Home 用）

### 2.3 Card（内容承载组件）

* 用于：Featured 卡、Selected Work 卡、Case Study 的各 section（建议每个 section 都在 card 容器里，阅读体验像“研究文档分块”）

### 2.4 Case Study 模板（全站最重要）

每个主卡项目都统一 6 段结构：
**Context｜Problem｜Approach｜Evidence｜Artifacts｜My Role**

---

## 3) 页面级 PRD（每页显示什么 + 文案 + 布局顺序）

## Page 1 — Home（index.html）

### 区块顺序（必须按这个走）

1. Hero
2. What I’m solving（3 bullets）
3. My approach（四步法）
4. Featured（3 cards only）
5. Spotlight（UN 视频）
6. About（mini bio + CTA）

### 3.1 Hero（首屏文案）

* Headline：**Building evidence-based learning systems—from measurement to scalable EdTech.**
* Subheadline（2行）：

  1. **I work at the intersection of educational measurement, learning analytics, and product innovation.**
  2. **My focus is translating rigorous evaluation into tools and systems that improve learning in real classrooms—at scale.**
* Tag chips：Educational Measurement · Learning Analytics · Evidence-based EdTech · Research–Practice Translation · Implementation at Scale
* CTA：

  * Primary：View Selected Work
  * Secondary：Venture & Product Innovation
* Supporting line（可选）：From UN SDG4 evidence-to-policy pipelines, to school-based quasi-experiments, to LMS and AI classroom deployments.

### 3.2 What I’m solving（三条短句）

* Evidence gap：EdTech often “looks effective,” but lacks reproducible evidence standards and mechanism-level insight.
* Invisible learning process：When learning processes are not measurable, interventions rely on intuition and cannot reliably improve over time.
* Scale vs. reality：Innovation fails in real schools when implementation constraints and fairness are not designed in from day one.

### 3.3 My approach（Measure → Intervene → Evidence → Scale）

* Measure：Define actionable learning indicators beyond test scores…
* Intervene：Translate measurements into feasible interventions…
* Evidence：Use experiments and quasi-experiments… identify what works, for whom…
* Scale：Turn evidence into deployable systems: data contracts, evaluation gates, dashboards, SOPs…

### 3.4 Featured（只放 3 张）

* Card 1：United Nations ESCAP — Vietnam SDG4: Evidence-to-Policy Pipeline（link：Read the case）
* Card 2：HETERNAL — From LMS augmentation to AI classroom decision support（link：Explore the venture）
* Card 3：Tsinghua University — MAIC: Real-school quasi-experiment & implementation（link：View research + field implementation）

### 3.5 Spotlight（视频区块）

* Section title：Spotlight: SDG4 Evidence in Action
* Copy：I also share a long-form presentation… uncertainty boundaries, equity analyses, implementation translation layer.
* 嵌入：PRD 已给 iframe 容器（只需要替换 YOUR_VIDEO_URL）

### 3.6 About（mini bio）

* Section title：About
* Bio 段落（PRD 已给完整英文，可直接粘贴）
* CTA：View CV / Contact

---

## Page 2 — Research Agenda（research.html）

### 页面目标

“研究者身份页”，写长期问题与方法，不写经历清单。

### 结构顺序

1. Page header
2. Core questions（3）
3. Methods & lenses
4. Near-term directions

#### 3.7 Page header

* Headline：Research Agenda
* Subheadline：The long-term questions guiding my work across research, products, and real schools.

#### 3.8 Core questions（3 个母题）

* Q1 Actionable measurement：How can we measure learning… valid, interpretable, feasible…
* Q2 Evidence standards…：What should count as evidence… AI-mediated… reproducibility, guardrails…
* Q3 Scaling without drift：How do we translate evidence into scalable systems… constraints…

#### 3.9 Methods & lenses（组织成“工具箱”，不要像 CV）

* Measurement & calibration：IRT、BKT/DKT、validity、DIF fairness audit…
* Experimental & quasi-experimental：A/B、CUPED、heterogeneity、ANCOVA、matched、DiD…
* Process data & monitoring：event logging/data contracts、time-window modeling、subgroup monitoring…
* Implementation translation：SOPs、dashboards、brief + annex…

#### 3.10 Near-term directions

三条前瞻方向（PRD 给了完整 bullet）

---

## Page 3 — Selected Work（work.html）

### 页面目标

“项目索引页”：跨政策评估/学校研究/产品创新的作品，**每个项目都强调证据与可交付资产**。

### 结构顺序

1. Page header
2. Filtering chips（可选）
3. Project grid（7 主卡 + 2 短卡可选）

#### 3.11 Page header

* Headline：Selected Work
* Subheadline：Projects across policy evaluation, school-based research, and product innovation—each designed to produce evidence and deployable artifacts.

#### 3.12 Filtering chips（可选 UI）

Policy & Systems · School Research · Product & Platforms · Measurement & Evaluation

#### 3.13 主卡列表（7 张）

PRD 已明确你要把哪些当“主卡”，并建议短卡保留但不抢主线：

* 主卡 A：UN ESCAP — Vietnam SDG4…（政策与系统）
* 主卡 B：HETERNAL × University of Sydney — Canvas LMS augmentation（高校产品）
* 主卡 C：Tsinghua — MAIC…（真实学校准实验+落地，置顶之一）
* 主卡 D：**（你 PRD 里还有中学/课堂线的卡，建议 Cursor 从原文补齐；列表页保持一致格式）**
* 主卡 E：Yuanfudao — 指标体系×IRT/BKT×实验评估（必须主卡）
* 主卡 F：Zuoyebang — backward design×IRT/BKT×公平性/DiD（必须主卡）
* 主卡 G：TAL — Pre-K–G3 数学闭环（产品味最强，建议主卡）
* 短卡（2）：ECNU InnoSpark；UNV Vietnam evaluation

> 列表页每张卡建议只展示：Title + Card summary + 1行 “Artifact hint”，点击进入详情页按六段模板展开。

---

## Page 4 — Venture & Product Innovation（venture.html）

### 页面目标

强调“研究 → 产品化 → 可部署资产”的能力，是全站重点加厚页。

### 结构顺序

1. Page header
2. HETERNAL overview
3. Three-phase roadmap（高影响区块）
4. Product principles
5. Deliverables（research × product）

#### 3.14 Page header

* Headline：Venture & Product Innovation
* Subheadline：How I translate research into deployable products—without losing evidence, interpretability, or implementation feasibility.

#### 3.15 HETERNAL 概述

HETERNAL is my venture… not “AI everywhere,” but measurable interventions with evidence gates, compliance-by-design, reusable implementation assets.

#### 3.16 三阶段路线图

* Phase 1 — Higher education / Canvas LMS：强调 auditability、可追溯、可复现
* Phase 2 — K–12：classroom process data → teacher decision support（趋势/阈值，而非炫技）
* Phase 3 — Early years：measure → diagnose → practice → re-assess，低负担可实施

#### 3.17 Product principles（不可妥协的 5 条）

Instrumentation-first、Evidence gates、Actionable outputs、Compliance-by-design、Scale without drift

#### 3.18 Deliverables（非常具体）

Measurement / Evaluation / Decision / Implementation / Reproducibility 五层资产清单

---

## Page 5 — CV / Contact（cv.html）

### 结构顺序

1. CV 区块（PDF 下载 + 1屏摘要）
2. Contact 区块（邮箱/链接 + CTA）

#### 3.19 CV

* Headline：CV
* Copy：For a concise summary… download my CV…
* Button：Download CV (PDF)

#### 3.20 Contact

* Headline：Contact
* Copy：I’m always open to conversations about evidence-based EdTech…
* Links：Email / LinkedIn / GitHub / Google Scholar(optional)
* Buttons：Email me；Schedule a chat（可选）

---

## 4) Case Study 详情页 PRD（work/*.html）

### 统一模板（所有主卡一致）

**Context｜Problem｜Approach｜Evidence｜Artifacts｜My Role**

### 内容密度原则

* 每一段最多 3–6 行文字 + 2–5 个 bullets（Evidence/Artifacts 以 bullet 为主）
* “Artifacts”必须可视化（PDF/截图/图表），没有就先放 placeholder（之后再换）

---

## 5) 资产清单（你需要客户提供/你要催的材料）

PRD 已给非常具体的清单：真实照片（隐私处理）、dashboard 截图、KPI tree、coverage matrix、protocol checklist、演讲视频帧等。
另外：PRD 明确不建议 AI 人像/教室拟真图，可信度会掉。

---

# 文档 2：执行 ToDoList（按交付节奏拆解 + 验收标准）

> 这份是你自己的“项目管理清单”，也是你发给客户对齐进度的依据。

## Sprint 0：内容与范围锁定（1 次性）

* [ ] 确认全站主线：Measure → Intervene → Evidence → Scale（写入首页与所有 case 的 Approach）
* [ ] 确认 5 页导航与命名（Home/Research/Work/Venture/CV）
* [ ] 确认 Featured 只放 3 个：UN ESCAP、HETERNAL、Tsinghua/MAIC

**验收标准**：客户口头确认“结构就按这个，不再改页数/主线”。

---

## Sprint 1：信息架构与阅读体验（先把“学术感”立住）

* [ ] 全站统一 Header / Footer（导航+CTA+footer文案）
* [ ] 每页 Page Header 完整（headline + subheadline）
* [ ] 卡片化分块：Home 的 Featured、Work 的项目、Case 的 6 段全部是分块阅读

**验收标准**：任意页面截一屏，能看出“像 Stanford/Harvard 的阅读结构”。

---

## Sprint 2：Home 页一次成型（按 PRD 文案原封不动落地）

* [ ] Hero：Headline + 2 行 subheadline + tag chips + CTA
* [ ] What I’m solving：3 bullets 原文
* [ ] My approach：四步法原文
* [ ] Featured 3 cards（标题+一句 summary + link text）
* [ ] Spotlight 视频区块（先留 YOUR_VIDEO_URL 占位也行）
* [ ] About 段落 + CTA

**验收标准**：Home 从上到下没有“空区块”；点击 Featured 能跳到对应 case/venture。

---

## Sprint 3：Selected Work 列表页（项目索引）

* [ ] Page header 文案准确（headline+subheadline）
* [ ] 过滤 chips（可先不做交互，但 UI 占位要有）
* [ ] 7 主卡 + 2 短卡都在列表中（至少 title + summary + link）

**验收标准**：work.html 能作为“目录页”，读者能快速扫到每个项目属于哪类。

---

## Sprint 4：Case Study 模板 + 至少 3 个完整案例

优先级建议（与你首页 Featured 对齐）：

1. UN ESCAP（A）
2. HETERNAL（B，或 venture 里作为长文）
3. Tsinghua/MAIC（C）

每个案例必须包含：

* [ ] Context
* [ ] Problem
* [ ] Approach（可把闭环 pipeline 写成 bullet）
* [ ] Evidence & outputs（至少 3 条 bullet）
* [ ] Artifacts（至少 2 项：PDF/截图/方法说明/视频链接）
* [ ] My Role（明确“我做了什么”，避免空话）

**验收标准**：这 3 个案例能独立说服读者“有证据、有产出、能落地”。

---

## Sprint 5：Research Agenda 页完整落地

* [ ] 3 个 Core Questions（原文）
* [ ] Methods & lenses（四类工具箱）
* [ ] Near-term directions（三条）

**验收标准**：这页读起来像“研究陈述”，不是“经历罗列”。

---

## Sprint 6：Venture 页（重点加厚，体现产学研一体化）

* [ ] HETERNAL 概述段落
* [ ] 三阶段路线图（三段都要有“要展示什么资产”）
* [ ] 5 条 Product principles 原文
* [ ] Deliverables 五层资产清单

**验收标准**：读者会觉得你像“一个 lab + product org 的 leader”，而不是只会讲概念。

---

## Sprint 7：CV / Contact 页（最小可用）

* [ ] CV：下载按钮 + 一屏摘要（只保留与主线一致条目）
* [ ] Contact：copy + email + 链接 + CTA 按钮

**验收标准**：HR/合作者 30 秒能找到联系方式与简历。

---

## Sprint 8：上线前 QA（必须做，不然 GitHub Pages 常翻车）

* [ ] 所有链接无 404（尤其是 work 子目录相对路径）
* [ ] SEO title/description 全页一致可控
* [ ] 图片 alt text（尤其首页 hero 建议的 alt）
* [ ] 隐私：涉及课堂/未成年人照片做模糊/远景

---

# 给 Cursor 的“指令模板”（你直接复制粘贴就能用）

你可以把下面这段当成 Cursor 的系统提示（它会更像你想要的学术网站，而不是瞎设计）：

* 目标：实现一个学术风格个人网站（Stanford/Harvard 方向），5 个页面：Home/Research/Work/Venture/CV。导航与 CTA 文案严格使用 PRD：View Selected Work / Get in Touch。
* 首页必须按区块顺序实现：Hero（含 headline/subheadline/tag chips/CTA）→ What I’m solving（三条原文）→ My approach（四步原文）→ Featured（三卡原文）→ Spotlight（视频 embed 占位）→ About（bio 原文）。
* Selected Work 列表页必须展示 7 主卡 + 2 短卡；详情页统一模板 Context/Problem/Approach/Evidence/Artifacts/My Role。
* 视觉原则：内容优先、强层级、低装饰、模块化卡片承载文本；不要商业 landing page 风格。

---

