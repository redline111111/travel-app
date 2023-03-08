import { ClientConfig, createClient } from 'next-sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
	projectId: 'tv6dtgr4',
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2021-10-21',
	useCdn: false
}

export const sanityClient = createClient(config)

export const urlFor = source =>
	createImageUrlBuilder({ clientConfig: config }).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
