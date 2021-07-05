/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import SectionLinks from './SectionLinks';
import React from 'react';
import {colors, media} from 'theme';
import {sectionListCommunity, sectionListDocs} from 'utils/sectionList';

// $FlowFixMe
import navFooter from '../../../content/footerNav.yml';

import ossLogoPng from 'images/oss_logo.png';

const Footer = ({layoutHasSidebar = false}: {layoutHasSidebar: boolean}) => (
  <footer
    dir="rtl"
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
      '@media print': {
        display: 'none',
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingLeft: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingLeft: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingLeft: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingRight: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>תיעוד</MetaTitle>
            {sectionListDocs.map((section) => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>ערוצים</MetaTitle>
            <SectionLinks links={navFooter.channels.items} />
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>קהילה</MetaTitle>
            <ExternalFooterLink
<<<<<<< HEAD
              href={`https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md`}>
              קוד התנהגות
=======
              href={`https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md`}>
              Code of Conduct
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28
            </ExternalFooterLink>
            {sectionListCommunity.map((section) => (
              <FooterLink
                to={`/community/${section.items[0].id}.html`}
                key={section.title}>
                {section.title}
              </FooterLink>
            ))}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>עוד</MetaTitle>
            <FooterLink to="/tutorial/tutorial.html">מדריך</FooterLink>
            <FooterLink to="/blog/">בלוג</FooterLink>
            <FooterLink to="/acknowledgements.html">תודות</FooterLink>
            <ExternalFooterLink
              href="https://facebook.github.io/react-native/"
              target="_blank"
              rel="noopener">
              React Native
            </ExternalFooterLink>
            <ExternalFooterLink href="https://opensource.facebook.com/legal/privacy">
              פרטיות
            </ExternalFooterLink>
            <ExternalFooterLink href="https://opensource.facebook.com/legal/terms">
              Terms
            </ExternalFooterLink>
          </FooterNav>
        </div>
        <section
          dir="rtl"
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics
            paddingLeft: 40,

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <a
            href="https://opensource.facebook.com/projects/"
            target="_blank"
            rel="noopener">
            <img
              alt="Facebook Open Source"
              css={{
                maxWidth: 160,
                height: 'auto',
              }}
              src={ossLogoPng}
            />
          </a>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
            {`כל הזכויות שמורות © ${new Date().getFullYear()} Facebook Inc.`}
          </p>
        </section>
      </div>
    </Container>
  </footer>
);

export default Footer;
