import { createStyles, Text, Container, ActionIcon, Group, Center } from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons"
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  footer: {
    marginTop:0,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center"
    }
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline"
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column"
    }
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs
    }
  }
}))

export default function FooterLinks() {
  const { classes } = useStyles()
 const data = [
    {
      "title": "About",
      "links": [
        {
          "label": "Features",
          "link": "#"
        },
        {
          "label": "Pricing",
          "link": "#"
        },
        {
          "label": "Support",
          "link": "#"
        },
        {
          "label": "Forums",
          "link": "#"
        }
      ]
    },
    {
      "title": "Project",
      "links": [
        {
          "label": "Contribute",
          "link": "#"
        },
        {
          "label": "Media assets",
          "link": "#"
        },
        {
          "label": "Changelog",
          "link": "#"
        },
        {
          "label": "Releases",
          "link": "#"
        }
      ]
    },
    {
      "title": "Community",
      "links": [
        {
          "label": "Join Discord",
          "link": "#"
        },
        {
          "label": "Follow on Twitter",
          "link": "#"
        },
        {
          "label": "Email newsletter",
          "link": "#"
        },
        {
          "label": "GitHub discussions",
          "link": "#"
        }
      ]
    }
  ]
  const groups = data.map(group => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={event => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Center p={20}>
      <img src="/hof.png"  alt="hands 0f africa logo" style={{width:150}}/>
      </Center>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 Hands-Of-Africa  All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component="a" href="https://www.instagram.com/handsof.africa/?igshid=ZDdkNTZiNTM%3D" size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Group spacing={0} className={classes.social} position="right" noWrap>
        <Link className="next" href="/legal-notice-privacy-policy" >
       <Text color="dimmed" size="sm">
          Our Privacy policy ,Legal Notice and Terms & Conditions
        </Text>
        </Link>
        </Group>
      </Container>
    </footer>
  )
}
