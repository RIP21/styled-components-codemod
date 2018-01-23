'use strict';

jest.autoMockOff();
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;
const transform = require('../sc-native-to-plain');

describe('smoke test', () => {
  const input = `
  import styled from 'styled-components/native';
  import styled from 'styled-components/native';
  import styled from "styled-components/native";
  import styled from 'styled-components/native';
  const styled = require( 'styled-components/native' );
  const styled = require('styled-components/native');
  const styled = require( "styled-components/native" );
  const styled = require("styled-components/native");
  `
  const expected = `
  import styled from 'styled-components';
  import styled from 'styled-components';
  import styled from "styled-components";
  import styled from 'styled-components';
  const styled = require( 'styled-components' );
  const styled = require('styled-components');
  const styled = require( "styled-components" );
  const styled = require("styled-components");
  `
  defineInlineTest(transform, {}, input, expected);
});
