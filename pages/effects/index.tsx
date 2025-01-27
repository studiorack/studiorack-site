import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import List from '../../components/list';
import { Manager, PackageInterface, PluginType, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type EffectsProps = {
  packages: RegistryPackages;
};

const Effects = ({ packages }: EffectsProps) => {
  const router = useRouter();
  const packagesFiltered: PackageInterface[] = filterPlugins([PluginType.Effect], router, packages);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Effects'])}</title>
      </Head>
      <List items={packagesFiltered} type="effects" title="Effects" />
    </Layout>
  );
};

export default Effects;

export const getStaticProps: GetStaticProps = async () => {
  const manager = new Manager(RegistryType.Plugins);
  await manager.sync();
  return {
    props: {
      packages: manager.toJSON(),
    },
  };
};
