import { configDefaults, projectsGetLocal, ProjectVersion, ProjectVersionLocal } from '@studiorack/core';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import List from '../../components/list';
import { filterProjects } from '../../lib/project';
import { Manager, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type ProjectsProps = {
  packages: RegistryPackages;
};

const Projects = ({ packages }: ProjectsProps) => {
  const router = useRouter();
  const projectTypes = configDefaults('appFolder', 'pluginFolder', 'presetFolder', 'projectFolder').projectTypes;
  const projectsFiltered: ProjectVersion[] = filterProjects(projectTypes, packages, router);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Projects'])}</title>
      </Head>
      <List items={projectsFiltered} type="projects" title="Projects" filters={false} tabs={projectTypes} />
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const manager = new Manager(RegistryType.Projects);
  await manager.sync();
  return {
    props: {
      packages: manager.toJSON(),
    },
  };
};
