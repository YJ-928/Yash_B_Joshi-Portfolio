// ─────────────────────────────────────────────────────────────────────────
// All site content lives here. Editing this file is the only thing needed to
// update the portfolio — no markup changes. That is deliberate: the previous
// version went stale because adding anything meant editing 28 carousel divs.
//
// RULE: nothing confidential. No employer-linked project names, no client or
// engagement names, no dates or titles. Describe the system and the decision.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Yash B Joshi",
  role: "Backend Engineer",
  tagline: "Workflow orchestration · Distributed systems · Python & Go",
  intro:
    "I build the parts of a system that have to be right, not just fast — workflow engines, async data layers, streaming pipelines, and the compilers and schedulers underneath them.",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/YJ-928",
    linkedin: "https://www.linkedin.com/in/yash-b-joshi/",
    twitter: "https://twitter.com/_YashBJoshi",
  },
};

export const focus = [
  {
    n: "01",
    glyph: "orchestration",
    title: "Workflow orchestration & durable execution",
    body: "Long-running processes that survive restarts, retries and partial failure. Temporal, compensation, and execution state you can still reason about a week later.",
    tags: ["Temporal", "Durable execution", "Compensation"],
  },
  {
    n: "02",
    glyph: "compiler",
    title: "Compilers & DSLs",
    body: "Turning a declarative definition into an executable plan — graph traversal, lowering, validation, normalisation. The interesting problems are all in the edge cases.",
    tags: ["Graph traversal", "IR design", "Validation"],
  },
  {
    n: "03",
    glyph: "data",
    title: "Async Python at the data layer",
    body: "SQLAlchemy 2.0, connection lifecycle, migration discipline. Async is easy to write and hard to get right once real load arrives.",
    tags: ["SQLAlchemy 2.0", "Alembic", "PostgreSQL"],
  },
  {
    n: "04",
    glyph: "schedule",
    title: "Scheduling correctness",
    body: "Recurrence rules, occurrence generation, timezone-aware scheduling — the class of problem where “it works” and “it's correct” are genuinely different claims.",
    tags: ["Recurrence", "Timezones", "Calendars"],
  },
  {
    n: "05",
    glyph: "auth",
    title: "Auth & access control",
    body: "Asymmetric JWT, centralised verification, reusable middleware, and RBAC that still holds when the fifth service shows up.",
    tags: ["JWT RS256", "RBAC", "Middleware"],
  },
  {
    n: "06",
    glyph: "observe",
    title: "Observability of distributed work",
    body: "Tracing an execution back to the intent that produced it, so a failure is diagnosable rather than a stack trace in a log nobody reads.",
    tags: ["Tracing", "Provenance", "Failure analysis"],
  },
];

export const work = [
  {
    kind: "Enterprise automation platform",
    title: "A visual workflow canvas, compiled to durable execution",
    body:
      "Authors draw a workflow; it has to run reliably for hours or days. I work on the compiler that lowers that graph into an executable plan, and the contract between compiler output and a Temporal-based runtime. The part I find most interesting is provenance — mapping a live execution back to the node that produced it, so a failure points at a shape on the canvas instead of a stack trace.",
    tags: ["Python", "Temporal", "DSL compiler", "Kubernetes"],
  },
  {
    kind: "Video management platform",
    title: "Replacing my own streaming architecture",
    body:
      "Started as an OpenCV proof of concept for multi-camera streaming, and scaled into a real backend. The design I had built first didn't hold on bandwidth or camera count, so I migrated the pipeline to HLS via FFmpeg. Later work moved it toward production: centralised asymmetric-JWT auth with reusable middleware, and an SSH-based deployment path with Docker image load/unload.",
    tags: ["FFmpeg", "HLS", "ONVIF", "JWT RS256", "Docker"],
  },
  {
    kind: "Education platform",
    title: "Scheduling that has to be correct, not just plausible",
    body:
      "A calendar module with a recurrence rule engine, occurrence generation and timezone-aware scheduling — where an off-by-one hour is a real bug for a real person. Built async-first on SQLAlchemy 2.0 with schema evolution handled properly through migrations, behind role-based access for several distinct user types.",
    tags: ["FastAPI", "Async SQLAlchemy", "Alembic", "GraphQL"],
  },
];

export const openSource = [
  {
    repo: "zigflow/zigflow",
    repoUrl: "https://github.com/zigflow/zigflow",
    about: "Durable workflows in YAML, powered by Temporal",
    pr: "#568",
    prUrl: "https://github.com/zigflow/zigflow/pull/568",
    title: "fix(utils): honour io.Writer contract in LogWriter.Write",
    body:
      "An intermittent “short write” that killed script execution. A blank chunk returned n=0 with a nil error, and io.MultiWriter correctly treated that as a short write — so one stray newline aborted the whole command. Root-caused from a production symptom, reproduced with a regression test, fixed in one line.",
    status: "Merged",
    tags: ["Go", "Temporal", "io.Writer contract", "Regression test"],
    note: "Listed in the project's AUTHORS file. More on the way — I'm upstreaming a set of engine fixes one at a time.",
  },
];

// Toolkit. `url` is the project's own site, or its repo when there isn't one —
// the marquee makes every entry clickable, so a dead entry is a dead link.
export const stack = {
  Languages: [
    { name: "Python", icon: "python", url: "https://www.python.org" },
    { name: "Go", icon: "go", url: "https://go.dev" },
    { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org" },
    { name: "SQL", icon: null, url: "https://www.postgresql.org/docs/current/sql.html" },
  ],
  Frameworks: [
    { name: "FastAPI", icon: "fastapi", url: "https://fastapi.tiangolo.com" },
    { name: "Django", icon: "django", url: "https://www.djangoproject.com" },
    { name: "DRF", icon: "django", url: "https://www.django-rest-framework.org" },
    { name: "SQLAlchemy 2.0", icon: "sqlalchemy", url: "https://www.sqlalchemy.org" },
  ],
  Orchestration: [
    { name: "Temporal", icon: "temporal", tint: "#8f7cff", url: "https://temporal.io" },
    { name: "Zigflow", icon: null, url: "https://github.com/zigflow/zigflow" },
    { name: "Celery", icon: "celery", url: "https://docs.celeryq.dev" },
    { name: "Redis", icon: "redis", url: "https://redis.io" },
  ],
  Data: [
    { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org" },
    { name: "Alembic", icon: null, url: "https://alembic.sqlalchemy.org" },
    { name: "GraphQL", icon: "graphql", url: "https://graphql.org" },
    { name: "S3", icon: null, url: "https://aws.amazon.com/s3/" },
  ],
  Infrastructure: [
    { name: "Docker", icon: "docker", url: "https://www.docker.com" },
    { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io" },
    { name: "AWS", icon: null, url: "https://aws.amazon.com" },
    { name: "Linux", icon: "linux", url: "https://www.kernel.org" },
    { name: "Nginx", icon: "nginx", url: "https://nginx.org" },
  ],
  Media: [
    { name: "FFmpeg", icon: "ffmpeg", url: "https://ffmpeg.org" },
    { name: "OpenCV", icon: "opencv", url: "https://opencv.org" },
    { name: "WebRTC", icon: "webrtc", url: "https://webrtc.org" },
    { name: "HLS", icon: null, url: "https://developer.apple.com/streaming/" },
  ],
};

export const now = [
  "Deep in workflow orchestration — compilers, durable execution, and making failures legible.",
  "Learning Go properly, mostly by fixing things in a runtime written in it.",
  "Upstreaming engine patches instead of carrying them locally.",
  "Getting better at the non-code half — design ownership, root-cause analysis, and writing things down.",
];

// ─── Tag → icon ──────────────────────────────────────────────────────────
// Work and Focus tags reuse the toolkit's icons so the same mark shows up in
// the marquee and on the card — recognition does the work a paragraph can't.
// Aliases cover tags written differently from the toolkit entry.
const alias = {
  "async sqlalchemy": "sqlalchemy",
  "jwt rs256": "jsonwebtokens",
  "sqlalchemy 2.0": "sqlalchemy",
  "rtsp / hls": null,
  temporal: "temporal",
  git: "git",
};

const byName = Object.fromEntries(
  Object.values(stack).flat().map((i) => [i.name.toLowerCase(), i])
);

export function iconFor(tag) {
  const k = tag.toLowerCase();
  if (k in alias) return { icon: alias[k], tint: k === "temporal" ? "#8f7cff" : null };
  const hit = byName[k];
  return hit ? { icon: hit.icon, tint: hit.tint ?? null } : { icon: null, tint: null };
}
