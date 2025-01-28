import { Component } from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { pageTitle } from '../../../lib/utils';
import { GetStaticPaths } from 'next';
import List from '../../../components/list';
import { Manager, PackageInterface, RegistryPackages, RegistryType } from '@open-audio-stack/core';

type PluginListProps = {
  packagesFiltered: PackageInterface[];
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    packagesFiltered: PackageInterface[];
    query: string;
    userId: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      packagesFiltered: props.packagesFiltered || [],
      query: '',
      userId: props.userId,
    };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{pageTitle(['Plugins', this.state.userId])}</title>
        </Head>
        <List
          items={this.state.packagesFiltered}
          type={RegistryType.Plugins}
          title={this.state.userId}
          filters={false}
        />
      </Layout>
    );
  }
}
export default PluginList;

export const getStaticPaths: GetStaticPaths = async () => {
  const manager = new Manager(RegistryType.Plugins);
  await manager.sync();
  const packages: RegistryPackages = manager.toJSON();
  const paths = [];
  for (const slug in packages) {
    const [userId] = slug.split('/');
    paths.push({
      params: {
        userId,
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const manager = new Manager(RegistryType.Plugins);
  await manager.sync();
  const packages: RegistryPackages = manager.toJSON();
  const packagesFiltered: PackageInterface[] = [];
  for (const slug in packages) {
    if (slug.split('/')[0] === params.userId) {
      packagesFiltered.push(packages[slug]);
    }
  }
  return {
    props: {
      packagesFiltered,
      userId: params.userId,
    },
  };
}
