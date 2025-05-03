<script lang="ts">
  import { Body, Button, Custom, Head, Hr, Html, Preview, Text } from "svelte-email-tailwind";

  interface Props {
    name: string;
  }

  let { name = "World" }: Props = $props();
</script>

<Html lang="en">
  <Head />
  <Preview preview="Hello, {name}!" />

  <Body>
    <Custom class="px-3 py-1 text-center font-sans">
      <Text class="m-0 mb-2 text-lg font-semibold">
        Hello, {name}!
      </Text>
      <Hr />
      <Button
        class="rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-orange-50"
        href="https://svelte.dev"
      >
        Visit Svelte
      </Button>
    </Custom>
  </Body>
</Html>
