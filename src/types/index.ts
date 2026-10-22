export interface ProjectEvidence {
  dataset: string;
  resultsAndScreenshots: string;
  githubRepo: string;
  liveDemo: string;
}

export interface PlannedFeature {
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  badgeType: 'academic' | 'concept';
  shortDescription: string;
  problemStatement: string;
  objectives: string[];
  plannedFeatures?: PlannedFeature[];
  methodologyOverview?: string;
  proposedTechnologies: string[];
  evidence: ProjectEvidence;
  implementationStage: string;
  isConcept: boolean;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  description: string;
  items: string[];
  accentColor: string;
}

export interface ExplorationTheme {
  id: string;
  title: string;
  description: string;
  tag: string;
  highlights: string[];
}
