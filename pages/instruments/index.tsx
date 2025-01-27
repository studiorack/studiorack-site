import List from '../../components/list';
import { Manager, PackageInterface, PluginType, RegistryPackages, RegistryType } from '@open-audio-stack/core';
import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';

type InstrumentsProps = {
  packages: RegistryPackages;
};

const Instruments = ({ packages }: InstrumentsProps) => {
  const router = useRouter();
  const packagesFiltered: PackageInterface[] = filterPlugins(
    [PluginType.Generator, PluginType.Instrument, PluginType.Preset, PluginType.Sampler, PluginType.Tool],
    router,
    packages,
  );
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Instruments'])}</title>
      </Head>
      <List items={packagesFiltered} type="instruments" title="Instruments" />
    </Layout>
  );
};

export default Instruments;

export const getStaticProps: GetStaticProps = async () => {
  const manager = new Manager(RegistryType.Plugins);
  await manager.sync();
  return {
    props: {
      packages: manager.toJSON(),
    },
  };
};
