export interface ContactsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

export interface ContactsPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  getContacts(filter: string): Promise<{results: any[]}>;
}