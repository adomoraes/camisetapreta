import * as v from 'valibot'

const Profile = v.object({
	name: v.string(),
	image: v.object({author: v.string(), color: v.string(), url: v.string()}),
	metadata: v.array(v.object({name: v.string(), value: v.string()}))
})
export type Profile = v.InferOutput<typeof Profile>

const Profiles = v.array(Profile)

export async function getProfiles() {
	const response = await fetch('/profiles')
	if (!response.ok) {
		throw new Error('Failed to fetch')
	}
	return v.parse(Profiles, await response.json())
}
