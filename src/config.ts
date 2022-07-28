const missingSetting: string = "Warning: No value set for this environment variable";

const config = {
  "PORT": process.env.PORT || missingSetting,
  "DATABASE_URL": process.env.DATABASE_URL || missingSetting
}

export default config;