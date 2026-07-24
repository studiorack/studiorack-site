import { Manager, RegistryType } from '@open-audio-stack/core';

const managers = new Map<RegistryType, Promise<Manager>>();

// Static generation runs getStaticProps once per page (500+ pages), each of which
// would otherwise call manager.sync() and re-fetch the full registry over the
// network. Caching by RegistryType keeps that to one fetch per type per worker,
// avoiding the connection resets seen when hundreds of pages fetch concurrently.
export function getManager(type: RegistryType): Promise<Manager> {
  let manager = managers.get(type);
  if (!manager) {
    manager = (async () => {
      const instance = new Manager(type);
      await instance.sync();
      return instance;
    })();
    managers.set(type, manager);
  }
  return manager;
}
