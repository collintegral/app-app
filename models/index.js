import model from 'mongoose';
import ComponentSchema from './components';
import Fonts from './fonts';
import UserSchema from './users';
import PageSchema from './pages';
import TabSchema from './tabs';

const User = model('User', UserSchema);
const Page = model('Page', PageSchema);
const Tab = model('Tab', TabSchema);
const Component = model('Component', ComponentSchema);

export default {
  Component,
  Fonts,
  User,
  Page,
  Tab,
};
