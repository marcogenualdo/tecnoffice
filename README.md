# Website for Tecnoffice s.r.l.

Static site built in [Gatsby](https://www.gatsbyjs.com/) + [Netlify CMS](https://www.netlifycms.org/).

### Host

The website is hosted at [netlify.com](https://www.netlify.com/). Deploys are handled through a CI/CD pipeline hooked to the `master` branch.

### Domain

The domain www.tecnofficesrl.biz is registered on [aruba.it](https://www.aruba.it/en/home.aspx). The SSL certificate is provided by netlify.

### CMS

Some content on this website is editable through the `/admin` route by users registered with netlify identity. Any published change of this content creates a commit on the `master` branch, which triggers a build of the site.

In this repository all editable content is stored in the `content` folder (`content/uploads` for images) using markdown documents. These documents are parsed by gatsby's graphql queries using the plugin `markdownremark`. Image paths in markdowns are resolved using the pluing `gatsby-plugin-netlify-cms-paths`.

The CMS's configuration is stored in `static/admin/config.yml`.

### Webmail

This website provides several forms that upon completion trigger an email send. This is achieved using netlify forms hooked to a [Zapier](https://zapier.com/) gmail trigger.
Netlify forms send an event to the netlify `forms` subsection of the website. This notification is then picked up by Zapier which sends the email.

In theory one should set up a netlify forms notification for each form on the website. To avoid having to do that for each form, all forms in this website send a fetch request to the `/contattaci` form, which is the only one hooked to the email service.

A wrapper component named `MailForm` handles the send action. It further provides some basic fields which are present in all forms, and the fields `subject` and `body`, representing the email subject and body respectively. These are hidden in the website's UI, but must be present since netlify form events only registers actual form fields.

When a user submits one form, these two fields get filled by the `handleSubmit` function in the `MailForm` component. All the filled fields, including these two, are sent in the netlify `forms` notification, but only `subject` and `body` are used in the Zapier email.
