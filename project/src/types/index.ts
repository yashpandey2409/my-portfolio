import { ReactNode } from 'react';

export interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

export interface ProgressBarProps {
  percentage: number;
  label: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface SkillCardProps {
  name: string;
  level: number;
  category: string;
}

export interface CourseCardProps {
  title: string;
  provider: string;
  date: string;
  certificate: string;
  description: string;
  skills: string[];
}