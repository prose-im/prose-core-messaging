/*
 * prose-core-views
 *
 * Copyright: 2022, Valerian Saliou <valerian@valeriansaliou.name>
 * License: Mozilla Public License v2.0 (MPL v2.0)
 */

// COMPONENTS

function Avatar(user) {
  return {
    // --> DATA <--

    avatarUrl: user.avatar || null
  }
}

// EXPORTS

export default Avatar
