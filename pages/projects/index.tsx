import { useRouter } from 'next/router';
import { filterProjects } from '../../lib/project';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import List from '../../components/list';
import { Manager, PackageInterface, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type ProjectsProps = {
  packages: RegistryPackages;
};

const Projects = ({ packages }: ProjectsProps) => {
  const router = useRouter();
  const packagesFiltered: PackageInterface[] = filterProjects(router, packages);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Projects'])}</title>
      </Head>
      <List items={packagesFiltered} type={RegistryType.Projects} title="Projects" />
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
