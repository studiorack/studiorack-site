import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import List from '../../components/list';
import { Manager, PackageInterface, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type PluginsProps = {
  packages: RegistryPackages;
};

const Plugins = ({ packages }: PluginsProps) => {
  const router = useRouter();
  const packagesFiltered: PackageInterface[] = filterPlugins(router, packages);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Plugins'])}</title>
      </Head>
      <List items={packagesFiltered} type={RegistryType.Plugins} title="Plugins" />
    </Layout>
  );
};

export default Plugins;

export const getStaticProps: GetStaticProps = async () => {
  const manager = new Manager(RegistryType.Plugins);
  await manager.sync();
  return {
    props: {
      packages: manager.toJSON(),
    },
  };
};
