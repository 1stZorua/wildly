interface Element {
	question: string;
	answer: string;
}

interface Section {
	title: string;
	icon: string;
	questions: Element[];
}

export const sections: Section[] = [
	{
		title: 'General',
		icon: 'lucide:home',
		questions: [
			{
				question: 'How does the dog breed scanning process work?',
				answer:
					'Just snap a clear photo of your pup and upload it! Our AI will take a look and match their features to known breeds, giving you results in no time!'
			},
			{
				question: 'What breeds can your scanner detect? ',
				answer:
					"The current version of our scanner can detect eleven popular dog breeds. We're actively working to add more breeds to our database in future updates!"
			},
			{
				question: 'How accurate are the results?',
				answer:
					'Our AI model is highly accurate, but results may vary based on photo quality, lighting, and breed complexities. We continuously improve the system to ensure top-notch accuracy.'
			},
			{
				question: 'What if my dog’s breed result seems off?',
				answer:
					"If you’re unsure about the result, try scanning a few more photos from different angles. Results can vary slightly based on your dog's posture and photo clarity."
			},
			{
				question: 'Do I need special equipment to scan my dog?',
				answer:
					'No special equipment needed! Just a smartphone or device with a camera will work perfectly.'
			},
			{
				question: 'Can I scan an older photo of my dog?',
				answer:
					"Yes! You can upload any clear photo of your dog, whether it's recent or taken in the past."
			},
			{
				question: 'Is there a limit to how many times I can scan my dog?',
				answer:
					'There’s no limit! Feel free to scan as many times as you like, even for different photos of the same dog.'
			},
			{
				question: 'Will the scan detect mixed breeds?',
				answer:
					'Currently, the scanner is not trained to detect mixed breeds. However, support for mixed breed detection is planned for future updates.'
			},
			{
				question: 'Does the scanner work for puppies?',
				answer:
					'Yes, it works for puppies! However, younger puppies may have features that are harder to match, so results may be more accurate as they grow.'
			}
		]
	},
	{
		title: 'Support',
		icon: 'lucide:message-square',
		questions: [
			{
				question: 'How can I contact customer support?',
				answer: 'You can reach our customer support team via email at support@wildlyapp.com.'
			},
			{
				question: 'How do I report a bug or suggest a feature?',
				answer:
					"To report a bug or suggest a feature, you can use the 'Feedback' option in the app or email us directly at support@wildlyapp.com."
			},
			{
				question: 'How long does it take to get a response from support?',
				answer:
					'Our support team aims to respond within 24-48 hours. Response times may vary based on inquiry volume, but we’ll get back to you as soon as possible.'
			},
			{
				question: 'Can I request a breed to be added to the scanner?',
				answer:
					'Absolutely! We welcome requests for additional breeds. Send us a message with your suggestion via email at support@wildlyapp.com.'
			},
			{
				question: 'What browsers are supported by the Wildly website?',
				answer: 'Wildly works on any modern browser, so feel free to use your preferred one!'
			}
		]
	},
	{
		title: 'Others',
		icon: 'lucide:layout-grid',
		questions: [
			{
				question: 'Is my data secure with Wildly?',
				answer:
					'Absolutely. We prioritize user privacy and data security, ensuring that all uploaded photos and data are protected with industry-standard encryption methods.'
			},
			{
				question: 'Will my photos be stored after scanning?',
				answer:
					'Your photos are only stored temporarily during the scanning process and are deleted shortly afterward. We do not retain any images without your consent.'
			},
			{
				question: 'Can I use Wildly offline?',
				answer:
					'Wildly requires an internet connection to process scans and retrieve breed information. Offline functionality may be added in the future for certain features.'
			},
			{
				question: 'Is Wildly available in multiple languages?',
				answer:
					'Currently, Wildly is available in English, but we are working on adding more language options to make it accessible to a broader audience.'
			},
			{
				question: 'Does Wildly work with other animals besides dogs?',
				answer:
					'Right now, Wildly is designed specifically for dogs. However, we are exploring the possibility of expanding our recognition capabilities to include other animals in the future.'
			}
		]
	}
];
