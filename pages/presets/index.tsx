import { useRouter } from 'next/router';
import { filterPresets } from '../../lib/preset';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import List from '../../components/list';
import { Manager, PackageInterface, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type PresetsProps = {
  packages: RegistryPackages;
};

const Presets = ({ packages }: PresetsProps) => {
  const router = useRouter();
  const packagesFiltered: PackageInterface[] = filterPresets(router, packages);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Presets'])}</title>
      </Head>
      <List items={packagesFiltered} type={RegistryType.Presets} title="Presets" />
    </Layout>
  );
};

export default Presets;

export const getStaticProps: GetStaticProps = async () => {
  const manager = new Manager(RegistryType.Presets);
  await manager.sync();
  return {
    props: {
      packages: manager.toJSON(),
    },
  };
};
