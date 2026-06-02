/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ArtifactReflection {
  aspect: string;
  title: string;
  description: string;
  iconName: string; // references lucide icons
}

export interface AssessmentItem {
  id: string;
  indicator: string;
  scoreCycle1: number;
  scoreCycle2: number;
  scoreCycle3: number;
  description: string;
}

export interface TeacherMission {
  title: string;
  description: string;
  iconName: string;
}

export interface TeacherCompetence {
  category: string;
  title: string;
  description: string;
  skills: string[];
}
