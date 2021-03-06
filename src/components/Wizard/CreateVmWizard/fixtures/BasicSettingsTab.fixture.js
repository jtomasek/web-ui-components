import { BasicSettingsTab } from '../BasicSettingsTab';
import { namespaces } from './CreateVmWizard.fixture';
import { PROVISION_SOURCE_CONTAINER } from '../../../../constants';
import { CONTAINER_IMAGE_KEY, PROVISION_SOURCE_TYPE_KEY } from '../constants';
import { baseTemplates } from '../../../../k8s/objects/template';
import { userTemplates } from '../../../../tests/mocks/user_template';
import { callerContext } from '../../../../tests/k8s';

export const basicSettings = {
  name: {
    value: null,
  },
  namespace: {
    value: null,
  },
  [PROVISION_SOURCE_TYPE_KEY]: {
    value: null,
  },
  operatingSystem: {
    value: null,
  },
  flavor: {
    value: null,
  },
  workloadProfile: {
    value: null,
  },
};

export const validBasicSettings = {
  name: {
    value: 'name',
    validation: undefined,
  },
  namespace: {
    value: 'namespace',
    validation: undefined,
  },
  [PROVISION_SOURCE_TYPE_KEY]: {
    value: PROVISION_SOURCE_CONTAINER,
    validation: undefined,
  },
  [CONTAINER_IMAGE_KEY]: {
    value: 'pathtoimage',
    validation: undefined,
  },
  operatingSystem: {
    value: {
      id: 'fedora29',
      name: 'Fedora 29',
    },
    validation: undefined,
  },
  flavor: {
    value: 'small',
    validation: undefined,
  },
  workloadProfile: {
    value: 'generic',
    validation: undefined,
  },
};

export default {
  component: BasicSettingsTab,
  props: {
    templates: [...baseTemplates, ...userTemplates],
    namespaces,
    basicSettings,
    onChange: () => {},
    ...callerContext,
  },
};
